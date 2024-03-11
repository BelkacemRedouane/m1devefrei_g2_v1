
import { Resolvers } from "./types.js";

export const resolvers: Resolvers = {
  Query: {
    getFilms: (_, __, { dataSources }) => dataSources.ghibliAPI.getFilms(),
    getPeople: (_, __, { dataSources }) => dataSources.ghibliAPI.getPeople(),
  },
  Film: {
    people: async (film, _, { dataSources }) =>
      Promise.all(film.people.map(url => {
        const id = url.split('/').pop();
        return dataSources.ghibliAPI.getPersonById(id);
      })),
  },
  People: {
    films: async (person, _, { dataSources }) =>
      Promise.all(person.films.map(url => {
        const id = url.split('/').pop();
        return dataSources.ghibliAPI.getFilmById(id);
      })),
  },
}