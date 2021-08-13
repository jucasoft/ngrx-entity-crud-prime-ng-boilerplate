import {gql} from 'apollo-angular';

export const all = (variables) => ({
  queryParams: {
    query: gql`
      query allCoins($perPage:Int!){
        allCoins (perPage: $perPage){
          id
          name
          localized_name
        }
      }
    `,
    variables,
  }
})
