const userFacade = require("../facades/userFacade");
//const loginFacade = require("../facades/loginFacade")
//const blogFacade = require("../facades/blogFacade")

const {DateTime} = require("@okgrow/graphql-scalars");

//Resolver map
module.exports = resolvers = {
  DateTime,
  Query: {
    getAllUsers : () => {
      return userFacade.getAllUsers();
    },  
    findByUsername:()=> {
      return userFacade.findByUsername();
    },  
    findById:()=> {
      return userFacade.findById();
    },  
  },
};