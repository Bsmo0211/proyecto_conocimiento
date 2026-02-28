import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { GRAPHQL_ENDPOINT } from "../constants/utils";

const link = new HttpLink({
  uri: GRAPHQL_ENDPOINT,
  fetch,
});
const cache = new InMemoryCache();
const client = new ApolloClient({
  link: link,
  cache: cache,
});

export default client;
