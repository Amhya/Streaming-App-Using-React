import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MovieMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EpisodeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Category {
  readonly id: string;
  readonly title: string;
  readonly movies?: (Movie | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Category, CategoryMetaData>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category, CategoryMetaData>) => MutableModel<Category, CategoryMetaData> | void): Category;
}

export declare class Movie {
  readonly id: string;
  readonly title: string;
  readonly poster: string;
  readonly duration: string;
  readonly year?: number | null;
  readonly creator?: string | null;
  readonly plot: string;
  readonly categoryID: string;
  readonly video: string;
  readonly episode?: (Episode | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Movie, MovieMetaData>);
  static copyOf(source: Movie, mutator: (draft: MutableModel<Movie, MovieMetaData>) => MutableModel<Movie, MovieMetaData> | void): Movie;
}

export declare class Episode {
  readonly id: string;
  readonly title: string;
  readonly duration?: string | null;
  readonly poster: string;
  readonly video: string;
  readonly movieID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Episode, EpisodeMetaData>);
  static copyOf(source: Episode, mutator: (draft: MutableModel<Episode, EpisodeMetaData>) => MutableModel<Episode, EpisodeMetaData> | void): Episode;
}