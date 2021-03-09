const http = require("http")
const express = require("express")
const { ApolloServer } = require("apollo-server-express")
const { PORT } = require("./src/Settings")
const modules = require("./src/Modules")

const app = express()

const server = new ApolloServer({
  modules,
  subscriptions: {
    onConnect: (connectionParams, WebSocket, context) => {},
    onDisconnect: (WebSocket, context) => {},
  },
})

server.applyMiddleware({ app, path: '/graphql' })

const httpServer = http.createServer(app)

server.installSubscriptionHandlers(httpServer)

httpServer.listen({ port: PORT }, () => {
  console.log('http://localhost:' + PORT + server.graphqlPath);
  console.log('ws://localhost:' + PORT + server.subscriptionsPath);
})