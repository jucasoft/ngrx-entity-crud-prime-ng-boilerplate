import {ICriteria} from 'ngrx-entity-crud';
import {QueryOptions} from '@apollo/client/core';
import {AllCoinsDocument, AllCoinsQuery, AllCoinsQueryVariables} from '../graphql';

export const search = (variables: AllCoinsQueryVariables): ICriteria<QueryOptions<AllCoinsQueryVariables, AllCoinsQuery>> => ({
  queryParams: {
    query: AllCoinsDocument,
    variables,
  }
})
