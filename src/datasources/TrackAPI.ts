import { RESTDataSource } from "@apollo/datasource-rest";
import { AuthorModel, TrackModel } from "../models.js";

export class TrackAPI extends RESTDataSource {
  baseURL = "https://ghibliapi.dev/api/";

  async getFilms() {
    return this.get('films'); 
  }

 
  async getFilmById(id: string) {
    return this.get(`films/${id}`); 
  }

 
  async getPeople() {
    return this.get('people'); 
  }

 
  async getPersonById(id: string) {
    return this.get(`people/${id}`); 
  }
}