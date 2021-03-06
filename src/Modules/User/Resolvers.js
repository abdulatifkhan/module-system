const User = require("./User")

const resolvers = {

  User: {
    id: user => user.user_id,
    username: user => user.user_username,
  },

  Query: {
    users: () => User.many(),
  },

  Mutation: {
    createUser: (_, args) => {

      try {
        const newUser = User.create(args)
        return { ...newUser, __typename: "User", }
      }
      catch(error) {
        return {
          __typename: "Error",
          code: error.code || 0,
        }
      }

    }
  },

  Subscription: {},
}

module.exports = resolvers