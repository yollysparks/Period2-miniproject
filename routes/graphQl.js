var express = require('express');
var router = express.Router();
var {schema}= require("../graphql/schema");

const graphqlHTTP = require('express-graphql');

//router.use("/",(req,res)=>{res.end("Add your GraphQL endpoint here")})
 router.use('/', graphqlHTTP({
  schema,
   graphiql: true //while we develop so that we can see the changes and results while developing
 }))

module.exports = router;
