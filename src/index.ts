import "reflect-metadata";
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSchema } from 'type-graphql';

import { dataSourceGoodCorner } from "./config/db";
import { AdResolver } from "./resolvers/AdResolver";


const start = async () => {
  await dataSourceGoodCorner.initialize();
  
  const schema = await buildSchema({
    resolvers: [AdResolver],
  });
  
  const server = new ApolloServer({ schema });
  
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);
}

start();