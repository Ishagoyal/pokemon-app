import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://graphqlpokemon.favware.tech/v8",
  cache: new InMemoryCache(),
});
