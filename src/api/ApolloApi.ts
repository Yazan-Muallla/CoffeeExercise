import { DocumentNode } from "@apollo/react-hooks";
import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

export interface Mutation<T> {
  context?: any;
  mutation: DocumentNode;
  variables: T;
}

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export const ApollosUri = "http://localhost:4000/";
