import { NameLink } from './name-link';

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: NameLink;
  location: NameLink;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
