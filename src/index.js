import express from "express";
import bodyParser from 'body-parser';
//ersimport expressGraphQL from 'express-graphql';
const expressGraphQL = require('express-graphql').graphqlHTTP;
import mongoose from 'mongoose';
import routes from './routes/index';
import Schema from './graphql/index';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/graphql', expressGraphQL ({
    schema: Schema,
    //schema: graphql.buildSchema('type Query { msg: String }'),
    //rootValue: { msg: () => 'Hello world' },
    graphiql: true,
    pretty: true
}));


mongoose.connect('mongodb://localhost:27017/graphql', { useNewUrlParser: true });

routes(app);
app.listen(3000, () => console.log('Express has been started'));



