import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action, ActionCreator} from '@ngrx/store';
import * as actions from './actions';
import {ICriteria, OptEffect, TypedAction} from 'ngrx-entity-crud';
import {from, MonoTypeOperatorFunction, Observable} from 'rxjs';
import {catchError, map, repeat, switchMap} from 'rxjs/operators';
import {BaseGQLService, IBaseGQLService} from '@root-store/graphql-store/base-gql.service';
import {ApolloQueryResult} from '@apollo/client/core';

export interface GQLActions<T> {
  QueryRequest: ActionCreator<string, (props: ICriteria<T>) => ICriteria<T> & TypedAction<string>>;
  QueryFailure: ActionCreator<string, (props: { error: string; }) => { error: string; } & TypedAction<string>>;
  QuerySuccess: ActionCreator<string, (props: { items: T; request: ICriteria }) => { items: T; request: ICriteria } & TypedAction<string>>;

  MutateRequest: ActionCreator<string, (props: ICriteria<T>) => ICriteria<T> & TypedAction<string>>;
  MutateFailure: ActionCreator<string, (props: { error: string; }) => { error: string; } & TypedAction<string>>;
  MutateSuccess: ActionCreator<string, (props: { items: T; }) => { items: T; } & TypedAction<string>>;
}

@Injectable()
export class GraphqlStoreEffects {
  constructor(private readonly actions$: Actions, private readonly service: BaseGQLService) {
  }

  queryRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.QueryRequest),
    queryCall(this.service),
    queryResponse(actions, {dispatchResponse: false}),
    queryCatchError(actions),
    repeat()
  ));

}

export const queryCall = <T>(service: IBaseGQLService): MonoTypeOperatorFunction<any> => {// TODO: tipizzare any
  return input$ => input$.pipe(
    switchMap(payload => service.query(payload).pipe(
      map((response: ApolloQueryResult<T>) => ({response, payload}))
    ))
  );
};

export const queryResponse = <T>(actions: GQLActions<T>, optEffect?: OptEffect): MonoTypeOperatorFunction<any> => {// TODO: tipizzare any
  return input$ => input$.pipe(
    switchMap(({response, payload}) => {
        const result: Action[] = [];
        if (response.hasError) {
          result.push(actions.QueryFailure({error: response.message}));
          if (payload.onFault) {
            result.push(...payload.onFault);
          }
        } else {
          result.push(actions.QuerySuccess({items: response.data, request: payload}));
          // TODO: da valuta se rimettere questa azione o cancellare i filtri nel reducer
          // result.push(actions.Filters({filters: {}}));
          if (payload.onResult) {
            const onResults = (payload.onResult as Action[]).map(a => (a as any).newAction ? (a as any).newAction(response, payload) : a);
            result.push(...onResults);
          }
        }

        // TODO: momentaneamente disattivato
        // if ((optEffect || {}).dispatchResponse || payload.dispatchResponse) {
        //   result.push(actions.Response({
        //     actionType: payload.type,
        //     request: payload,
        //     response
        //   }));
        // }

        return result;
      }
    )
  );
};

export const queryCatchError = <T>(actions: GQLActions<T>): MonoTypeOperatorFunction<any> => { // TODO: tipizzare any
  return input$ => input$.pipe(
    catchError((error, caught) => {
        const response = [];
        response.push(actions.QueryFailure({error}));
        // TODO: disattivato momentaneamente.
        // response.push(actions.Response({
        //   actionType: 'Failure',
        //   request: null,
        //   response: {hasError: true, message: error.message, data: null}
        // }));
        return from(response);
      }
    ),
  );
};

