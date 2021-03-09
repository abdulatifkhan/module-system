// const User = require("./User")

const resolvers = {

  MutationResponse: {
    __resolveType: global => {
      return "User"
    },
  },
}

module.exports = resolvers