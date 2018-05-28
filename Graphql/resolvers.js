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
    findByUsername:(root,{input})=> {
      return userFacade.findByUsername(input.userName);
    },  
    findById:()=> {
      return userFacade.findById();
    },  
  },
Mutation: {
  addUser : (root, {input}) => {
    const newUser = new User({
      firstName : input.firstName,
      lastName : input.lastName,
      userName: input.userName,
      password: input.password
    });

    newUser.id = newUser._id;

    return new Promise((resolve, object) => {
      newUser.save((err) => {
        if(err) reject(err);
        else resolve(newUser)
      })
    })
  }
 }
};
