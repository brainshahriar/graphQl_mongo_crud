import crudModel from "../model/crud.js";
export const resolvers = {
  Query: {
    getAll: async () => {
      return await crudModel.find();
    },
  },
  Mutation: {
    createPost: async (parent, args, context, info) => {
      const { ...body } = args.post;
      const post = await new crudModel({ ...body }).save();
      return post;
    },
    updatePost: async (parent, args, context, info) => {
        const{id} = args;
      const { ...body } = args.post;
      const post = await crudModel.findByIdAndUpdate(
        id,
        { ...body },
        { new: true }
      );
      return post;
    },
    deletePost:async(parent,args,context,info)=>{
        const {id} = args;
        await crudModel.findByIdAndDelete(id);
        return "deleted";
    }
  },
};
