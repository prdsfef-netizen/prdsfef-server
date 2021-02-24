const resolvers = {
  Query: {
    // Usuarios
    getUser: () => {
      console.log("Obteniendo usuarios");
      return null;
    },
    // Types
    getCTypes: () => {
      console.log("Obteniendo tipos");
    },
  },
  Mutation: {
    // Usuarios
    register: (_, { input }) => userController.register(input),
    updateUser: (_, { input }, context) =>
      userController.updateUser(input, context),

    // Types
    createTypes: (_, { input }) => CTypesController.createTypes(input),
  },
};
module.exports = resolvers;