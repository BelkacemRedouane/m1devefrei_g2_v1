export type FilmModel = {
  id: string;
  title: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  rt_score: string;
  people: string[]; 
};

export type PeopleModel = {
  id: string;
  name: string;
  gender: string;
  age: string;
  eye_color: string;
  hair_color: string;
  films: string[]; 
};
