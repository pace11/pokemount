import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Home from "../src/pages/Home";

const client = new ApolloClient({
  uri: "https://graphql-pokemon.now.sh/ "
});

const App = () => (
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>
);

export default App;
