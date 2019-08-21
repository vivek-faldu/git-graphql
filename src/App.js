import React, { Component } from "react";
import Login from "./Login";
import Home from "./Home";
import "styled-components/macro";

import { ApolloClient } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";
//adding comment
const accesstoken = window.localStorage.getItem("token");
//comment
const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql"
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: accesstoken ? `Bearer ${accesstoken}` : ""
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
export default class App extends Component {
  render() {
    return (
      <>
        {accesstoken ? (
          <ApolloProvider client={client}>
            <Home />
          </ApolloProvider>
        ) : (
          <Login />
        )}
      </>
    );
  }
}
