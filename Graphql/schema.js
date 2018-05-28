const {makeExecutableSchema} = require("graphql-tools");
const resolvers = require("./resolvers");
const typeDefs = `
type Job {
  type: String
  company: String
  companyUrl : String
}
scalar DateTime
type User {
  _id: ID
  firstName: String
  lastName: String
  userName : String
  job: [Job]
  created : DateTime
  lastUpdated : DateTime
}
type Query{
    getAllUsers: [User]
    findByUsername(userName:String):User
    findById(userId:ID):User
}
input UserInput {
    firstName: String
    lastName: String
    userName : String
    password : String
  }
  input UserName {
    userName : String
  }
 
  type Mutation {
    addUser(input: UserInput): User
  }
  
`
const schema = makeExecutableSchema({typeDefs,resolvers});
module.exports =  {schema};