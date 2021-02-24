const { gql } = require("apollo-server");

const typesDefs = gql`
    # Users
    type User {
        id: ID,
        username: String,
        title: String,
        first_name: String,
        last_name: String,
        birthday: String,
        gender: String,
        description: String
        email: String,
        phone: String,
        github_user: String,
        linkedin_user: String,
        avatar: String,
        password: String,
        createAt: String
    }
     #Types
    type CTypes {
        id: ID,
        idUser: ID,
        types: String,
        img: String,
        createAt: String
    }
    #Users
    input UserInput {
        username: String!
        first_name: String!
        last_name: String!
        birthday: String!
        email: String!
        phone: String!
        password: String!
    }
    input UserUpdateInput {
        username: String
        title: String
        first_name: String
        last_name: String
        birthday: String
        description: String
        email: String
        gender: String
        phone: String
        github_user: String
        linkedin_user: String
        avatar: String
        currentPassword: String
        newPassword: String
    }
    input LoginInput {
        email: String!
        password: String!
    }
     #Types
    input TypeInput {
        idUser: ID!
        types: String!
        img: String
    }
    type Query {
        # User
        getUser: User
        #Types
        getCTypes: CTypes
    }

    type Mutation {
         #users
        register(input: UserInput): User
        updateUser(input: UserUpdateInput): Boolean
        
        #Types
        createTypes(input: TypeInput): CTypes
    }

`;
module.exports = typesDefs;