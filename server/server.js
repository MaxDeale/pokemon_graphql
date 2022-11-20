const schema = require('./schema/schema');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const connectDB = require('./db/db');

const app = express();
const port = process.env.PORT || 4000;

// Connect to database
connectDB();

require('dotenv').config();
app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

app.listen((port), console.log(`server is running on ${port}`,)); 