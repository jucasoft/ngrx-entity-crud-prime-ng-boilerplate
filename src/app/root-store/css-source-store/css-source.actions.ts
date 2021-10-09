import {Names} from './css-source.names';
import {createCrudActionsFactory} from 'ngrx-entity-crud';
import {CssSource} from '@models/vo/css-source';

export const actions = createCrudActionsFactory<CssSource>().createCrudActions(Names.NAME);

export const {
  Response,
  ResetResponses,

  SelectRequest,
  SelectFailure,
  SelectSuccess,

  SearchRequest,
  SearchFailure,
  SearchSuccess,

  CreateRequest,
  CreateFailure,
  CreateSuccess,

  EditRequest,
  EditFailure,
  EditSuccess,

  Reset,

  Edit,
  Create,
  Delete,
} = actions;



