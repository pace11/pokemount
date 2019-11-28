import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import RouterApp from "./routes";

const client = new ApolloClient({
  uri: "https://graphql-pokemon.now.sh/ "
});

const App = () => (
  <ApolloProvider client={client}>
    <RouterApp />
  </ApolloProvider>
);

export default App;
