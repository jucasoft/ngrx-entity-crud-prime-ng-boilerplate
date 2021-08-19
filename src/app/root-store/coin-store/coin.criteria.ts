import {ICriteria} from 'ngrx-entity-crud';
import {QueryOptions} from '@apollo/client/core';
import {CoinCreateDocument, CoinCreateMutation, CoinCreateMutationVariables, CoinRemoveDocument, CoinRemoveMutation, CoinRemoveMutationVariables, CoinSearchDocument, CoinSearchQuery, CoinSearchQueryVariables, CoinSelectDocument, CoinSelectQuery, CoinSelectQueryVariables, CoinUpdateDocument, CoinUpdateMutation, CoinUpdateMutationVariables} from '../graphql';

export const search = (variables: CoinSearchQueryVariables): ICriteria<QueryOptions<CoinSearchQueryVariables, CoinSearchQuery>> => ({
  queryParams: {
    query: CoinSearchDocument,
    variables,
  }
})

export const select = (variables: CoinSelectQueryVariables): ICriteria<QueryOptions<CoinSelectQueryVariables, CoinSelectQuery>> => ({
  queryParams: {
    query: CoinSelectDocument,
    variables,
  }
})

export const create = (variables: CoinCreateMutationVariables): ICriteria<QueryOptions<CoinCreateMutationVariables, CoinCreateMutation>> => ({
  queryParams: {
    query: CoinCreateDocument,
    variables,
  }
})

export const update = (variables: CoinUpdateMutationVariables): ICriteria<QueryOptions<CoinUpdateMutationVariables, CoinUpdateMutation>> => ({
  queryParams: {
    query: CoinUpdateDocument,
    variables,
  }
})

export const remove = (variables: CoinRemoveMutationVariables): ICriteria<QueryOptions<CoinRemoveMutationVariables, CoinRemoveMutation>> => ({
  queryParams: {
    query: CoinRemoveDocument,
    variables,
  }
})

