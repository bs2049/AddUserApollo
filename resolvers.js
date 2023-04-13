import { User } from "./model.js";

export const resolvers = {
    Query: {
        user: async (_, { id }) => User.findByPk(id),
        users: async () => await User.findAll(),  
    },
  
    Mutation: {
        addUser: async (_, { input }) => {
            await User.create({
                ...input,
                complete: false,
            });
            return {
                success: true,
                Errors:null
            };
        }
    }
};