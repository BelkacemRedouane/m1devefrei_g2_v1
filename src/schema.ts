import gql from "graphql-tag";

export const typeDefs = gql`
type Film {
  id: ID!
  title: String!
  description: String
  director: String
  producer: String
  release_date: String
  rt_score: String
  people: [People!]!
}

type People {
  id: ID!
  name: String!
  gender: String
  age: String
  eye_color: String
  hair_color: String
  films: [Film!]!
}

type Query {
  getFilms: [Film!]!
  getPeople: [People!]!
}
`
