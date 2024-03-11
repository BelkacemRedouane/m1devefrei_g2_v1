import { RESTDataSource } from "@apollo/datasource-rest";

export class GhibliAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://ghibliapi.dev/api/";
  }

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
