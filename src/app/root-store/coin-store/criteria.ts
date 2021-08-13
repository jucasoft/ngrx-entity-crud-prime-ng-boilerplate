import {gql} from 'apollo-angular';
import {ICriteria} from 'ngrx-entity-crud';
import {QueryOptions} from '@apollo/client/core';

const QQL_ALL = gql`
  query allCoins($perPage:Int!){
    allCoins (perPage: $perPage){
      id
      name
      localized_name
    }
  }
`

export const all = (variables):ICriteria<QueryOptions> => ({
  queryParams: {
    query: QQL_ALL,
    variables,
  }
})
