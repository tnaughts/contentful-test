import * as React from "react";
import { render } from "react-dom";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import { setContext } from "apollo-link-context";

import App from "./App";

const httpLink = createHttpLink({
  uri: "https://graphql.contentful.com/content/v1/spaces/8gp2519ce6g7"
});

const authLink = setContext((_, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `Bearer kvm2VUGHVBBgpcJVWrcwihRoHfLLXEKtHs4XbmhOlZs`
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
