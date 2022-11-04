const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
//Load schema & resolver
const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');

const http = require('http');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');

//Load db method
const  mongoDataMethods = require('./data/db');

// Connect to MongoDB
mongoose.connect((process.env.MONGODB_URL),() =>{
    console.log('Connected to MongoDB')
})
async function startServer() {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: () =>({mongoDataMethods}),
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
    });
    await server.start();
    server.applyMiddleware({app})

    await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));

    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}
startServer();



