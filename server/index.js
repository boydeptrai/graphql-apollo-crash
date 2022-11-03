const express = require('express');
const {ApolloServer} = require('apollo-server-express');


//Load schema & resolver
const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');

const http = require('http');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');

async function startServer() {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
    });
    await server.start();
    server.applyMiddleware({app})

    await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));

    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}
startServer();



