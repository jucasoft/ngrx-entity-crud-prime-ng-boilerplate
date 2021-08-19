import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date type */
  Date: any;
};



export type Coin = {
  __typename?: 'Coin';
  name: Scalars['String'];
  id: Scalars['ID'];
  localized_name: Scalars['String'];
};

export type CoinFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  localized_name?: Maybe<Scalars['String']>;
  name_neq?: Maybe<Scalars['String']>;
  id_neq?: Maybe<Scalars['ID']>;
  localized_name_neq?: Maybe<Scalars['String']>;
};

export type CoinInput = {
  name: Scalars['String'];
  id: Scalars['ID'];
  localized_name: Scalars['String'];
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['ID'];
  post_id: Scalars['ID'];
  body: Scalars['String'];
  date: Scalars['Date'];
  Post?: Maybe<Post>;
};

export type CommentFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id?: Maybe<Scalars['ID']>;
  post_id?: Maybe<Scalars['ID']>;
  body?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  id_neq?: Maybe<Scalars['ID']>;
  post_id_neq?: Maybe<Scalars['ID']>;
  body_neq?: Maybe<Scalars['String']>;
  date_lt?: Maybe<Scalars['Date']>;
  date_lte?: Maybe<Scalars['Date']>;
  date_gt?: Maybe<Scalars['Date']>;
  date_gte?: Maybe<Scalars['Date']>;
  date_neq?: Maybe<Scalars['Date']>;
};

export type CommentInput = {
  id: Scalars['ID'];
  post_id: Scalars['ID'];
  body: Scalars['String'];
  date: Scalars['Date'];
};


export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost?: Maybe<Post>;
  createManyPost?: Maybe<Array<Maybe<Post>>>;
  updatePost?: Maybe<Post>;
  removePost?: Maybe<Post>;
  createUser?: Maybe<User>;
  createManyUser?: Maybe<Array<Maybe<User>>>;
  updateUser?: Maybe<User>;
  removeUser?: Maybe<User>;
  createComment?: Maybe<Comment>;
  createManyComment?: Maybe<Array<Maybe<Comment>>>;
  updateComment?: Maybe<Comment>;
  removeComment?: Maybe<Comment>;
  createCoin?: Maybe<Coin>;
  createManyCoin?: Maybe<Array<Maybe<Coin>>>;
  updateCoin?: Maybe<Coin>;
  removeCoin?: Maybe<Coin>;
};


export type MutationCreatePostArgs = {
  title: Scalars['String'];
  views: Scalars['Int'];
  user_id: Scalars['ID'];
};


export type MutationCreateManyPostArgs = {
  data?: Maybe<Array<Maybe<PostInput>>>;
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['ID']>;
};


export type MutationRemovePostArgs = {
  id: Scalars['ID'];
};


export type MutationCreateUserArgs = {
  name: Scalars['String'];
};


export type MutationCreateManyUserArgs = {
  data?: Maybe<Array<Maybe<UserInput>>>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};


export type MutationRemoveUserArgs = {
  id: Scalars['ID'];
};


export type MutationCreateCommentArgs = {
  post_id: Scalars['ID'];
  body: Scalars['String'];
  date: Scalars['Date'];
};


export type MutationCreateManyCommentArgs = {
  data?: Maybe<Array<Maybe<CommentInput>>>;
};


export type MutationUpdateCommentArgs = {
  id: Scalars['ID'];
  post_id?: Maybe<Scalars['ID']>;
  body?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};


export type MutationRemoveCommentArgs = {
  id: Scalars['ID'];
};


export type MutationCreateCoinArgs = {
  name: Scalars['String'];
  localized_name: Scalars['String'];
};


export type MutationCreateManyCoinArgs = {
  data?: Maybe<Array<Maybe<CoinInput>>>;
};


export type MutationUpdateCoinArgs = {
  name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  localized_name?: Maybe<Scalars['String']>;
};


export type MutationRemoveCoinArgs = {
  id: Scalars['ID'];
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  title: Scalars['String'];
  views: Scalars['Int'];
  user_id: Scalars['ID'];
  User?: Maybe<User>;
  Comments?: Maybe<Array<Maybe<Comment>>>;
};

export type PostFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['ID']>;
  id_neq?: Maybe<Scalars['ID']>;
  title_neq?: Maybe<Scalars['String']>;
  views_lt?: Maybe<Scalars['Int']>;
  views_lte?: Maybe<Scalars['Int']>;
  views_gt?: Maybe<Scalars['Int']>;
  views_gte?: Maybe<Scalars['Int']>;
  views_neq?: Maybe<Scalars['Int']>;
  user_id_neq?: Maybe<Scalars['ID']>;
};

export type PostInput = {
  id: Scalars['ID'];
  title: Scalars['String'];
  views: Scalars['Int'];
  user_id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  Post?: Maybe<Post>;
  allPosts?: Maybe<Array<Maybe<Post>>>;
  _allPostsMeta?: Maybe<ListMetadata>;
  User?: Maybe<User>;
  allUsers?: Maybe<Array<Maybe<User>>>;
  _allUsersMeta?: Maybe<ListMetadata>;
  Comment?: Maybe<Comment>;
  allComments?: Maybe<Array<Maybe<Comment>>>;
  _allCommentsMeta?: Maybe<ListMetadata>;
  Coin?: Maybe<Coin>;
  allCoins?: Maybe<Array<Maybe<Coin>>>;
  _allCoinsMeta?: Maybe<ListMetadata>;
};


export type QueryPostArgs = {
  id: Scalars['ID'];
};


export type QueryAllPostsArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<PostFilter>;
};


export type Query_AllPostsMetaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<PostFilter>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryAllUsersArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<UserFilter>;
};


export type Query_AllUsersMetaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<UserFilter>;
};


export type QueryCommentArgs = {
  id: Scalars['ID'];
};


export type QueryAllCommentsArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<CommentFilter>;
};


export type Query_AllCommentsMetaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<CommentFilter>;
};


export type QueryCoinArgs = {
  id: Scalars['ID'];
};


export type QueryAllCoinsArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<CoinFilter>;
};


export type Query_AllCoinsMetaArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<CoinFilter>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  Posts?: Maybe<Array<Maybe<Post>>>;
};

export type UserFilter = {
  q?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  id_neq?: Maybe<Scalars['ID']>;
  name_neq?: Maybe<Scalars['String']>;
};

export type UserInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CoinSearchQueryVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  sortField?: Maybe<Scalars['String']>;
  sortOrder?: Maybe<Scalars['String']>;
  filter?: Maybe<CoinFilter>;
}>;


export type CoinSearchQuery = { __typename?: 'Query', allCoins?: Maybe<Array<Maybe<{ __typename?: 'Coin', name: string, id: string, localized_name: string }>>> };

export type CoinSelectQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CoinSelectQuery = { __typename?: 'Query', Coin?: Maybe<{ __typename?: 'Coin', name: string, id: string, localized_name: string }> };

export type CoinCreateMutationVariables = Exact<{
  name: Scalars['String'];
  localized_name: Scalars['String'];
}>;


export type CoinCreateMutation = { __typename?: 'Mutation', createCoin?: Maybe<{ __typename?: 'Coin', id: string, localized_name: string, name: string }> };

export type CoinUpdateMutationVariables = Exact<{
  id: Scalars['ID'];
  name: Scalars['String'];
  localized_name: Scalars['String'];
}>;


export type CoinUpdateMutation = { __typename?: 'Mutation', updateCoin?: Maybe<{ __typename?: 'Coin', id: string, localized_name: string, name: string }> };

export type CoinRemoveMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CoinRemoveMutation = { __typename?: 'Mutation', removeCoin?: Maybe<{ __typename?: 'Coin', id: string }> };

export const CoinSearchDocument = gql`
    query coinSearch($page: Int, $perPage: Int, $sortField: String, $sortOrder: String, $filter: CoinFilter) {
  allCoins(
    page: $page
    perPage: $perPage
    sortField: $sortField
    sortOrder: $sortOrder
    filter: $filter
  ) {
    name
    id
    localized_name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CoinSearchGQL extends Apollo.Query<CoinSearchQuery, CoinSearchQueryVariables> {
    document = CoinSearchDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CoinSelectDocument = gql`
    query coinSelect($id: ID!) {
  Coin(id: $id) {
    name
    id
    localized_name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CoinSelectGQL extends Apollo.Query<CoinSelectQuery, CoinSelectQueryVariables> {
    document = CoinSelectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CoinCreateDocument = gql`
    mutation coinCreate($name: String!, $localized_name: String!) {
  createCoin(name: $name, localized_name: $localized_name) {
    id
    localized_name
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CoinCreateGQL extends Apollo.Mutation<CoinCreateMutation, CoinCreateMutationVariables> {
    document = CoinCreateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CoinUpdateDocument = gql`
    mutation coinUpdate($id: ID!, $name: String!, $localized_name: String!) {
  updateCoin(id: $id, name: $name, localized_name: $localized_name) {
    id
    localized_name
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CoinUpdateGQL extends Apollo.Mutation<CoinUpdateMutation, CoinUpdateMutationVariables> {
    document = CoinUpdateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CoinRemoveDocument = gql`
    mutation coinRemove($id: ID!) {
  removeCoin(id: $id) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CoinRemoveGQL extends Apollo.Mutation<CoinRemoveMutation, CoinRemoveMutationVariables> {
    document = CoinRemoveDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }