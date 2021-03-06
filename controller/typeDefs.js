import { gql } from "apollo-server-express";
export const typeDefs = gql`

type Post {
    id:ID,
    title:String,
    description:String
}

type Query {
  getAll:[Post]
}

input PostInput{
    title:String,
    description:String
}

type Mutation{
    createPost(post:PostInput):Post
    updatePost(id:String,post:PostInput):Post
    deletePost(id:String):Post
}
`;

