"use client";
import { ApolloProvider } from "@apollo/client/react";
import client from "@/src/lib/apollo-client";

export const ApolloWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
