/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCategoryInput = {
  id?: string | null,
  title: string,
  _version?: number | null,
};

export type ModelCategoryConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  title: string,
  movies?: ModelMovieConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelMovieConnection = {
  __typename: "ModelMovieConnection",
  items:  Array<Movie | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Movie = {
  __typename: "Movie",
  id: string,
  title: string,
  poster: string,
  duration: string,
  year?: number | null,
  creator?: string | null,
  plot: string,
  categoryID: string,
  video: string,
  episode?: ModelEpisodeConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelEpisodeConnection = {
  __typename: "ModelEpisodeConnection",
  items:  Array<Episode | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Episode = {
  __typename: "Episode",
  id: string,
  title: string,
  duration?: string | null,
  poster: string,
  video: string,
  movieID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateCategoryInput = {
  id: string,
  title?: string | null,
  _version?: number | null,
};

export type DeleteCategoryInput = {
  id: string,
  _version?: number | null,
};

export type CreateMovieInput = {
  id?: string | null,
  title: string,
  poster: string,
  duration: string,
  year?: number | null,
  creator?: string | null,
  plot: string,
  categoryID: string,
  video: string,
  _version?: number | null,
};

export type ModelMovieConditionInput = {
  title?: ModelStringInput | null,
  poster?: ModelStringInput | null,
  duration?: ModelStringInput | null,
  year?: ModelIntInput | null,
  creator?: ModelStringInput | null,
  plot?: ModelStringInput | null,
  categoryID?: ModelIDInput | null,
  video?: ModelStringInput | null,
  and?: Array< ModelMovieConditionInput | null > | null,
  or?: Array< ModelMovieConditionInput | null > | null,
  not?: ModelMovieConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateMovieInput = {
  id: string,
  title?: string | null,
  poster?: string | null,
  duration?: string | null,
  year?: number | null,
  creator?: string | null,
  plot?: string | null,
  categoryID?: string | null,
  video?: string | null,
  _version?: number | null,
};

export type DeleteMovieInput = {
  id: string,
  _version?: number | null,
};

export type CreateEpisodeInput = {
  id?: string | null,
  title: string,
  duration?: string | null,
  poster: string,
  video: string,
  movieID: string,
  _version?: number | null,
};

export type ModelEpisodeConditionInput = {
  title?: ModelStringInput | null,
  duration?: ModelStringInput | null,
  poster?: ModelStringInput | null,
  video?: ModelStringInput | null,
  movieID?: ModelIDInput | null,
  and?: Array< ModelEpisodeConditionInput | null > | null,
  or?: Array< ModelEpisodeConditionInput | null > | null,
  not?: ModelEpisodeConditionInput | null,
};

export type UpdateEpisodeInput = {
  id: string,
  title?: string | null,
  duration?: string | null,
  poster?: string | null,
  video?: string | null,
  movieID?: string | null,
  _version?: number | null,
};

export type DeleteEpisodeInput = {
  id: string,
  _version?: number | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMovieFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  poster?: ModelStringInput | null,
  duration?: ModelStringInput | null,
  year?: ModelIntInput | null,
  creator?: ModelStringInput | null,
  plot?: ModelStringInput | null,
  categoryID?: ModelIDInput | null,
  video?: ModelStringInput | null,
  and?: Array< ModelMovieFilterInput | null > | null,
  or?: Array< ModelMovieFilterInput | null > | null,
  not?: ModelMovieFilterInput | null,
};

export type ModelEpisodeFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  duration?: ModelStringInput | null,
  poster?: ModelStringInput | null,
  video?: ModelStringInput | null,
  movieID?: ModelIDInput | null,
  and?: Array< ModelEpisodeFilterInput | null > | null,
  or?: Array< ModelEpisodeFilterInput | null > | null,
  not?: ModelEpisodeFilterInput | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    movies?:  {
      __typename: "ModelMovieConnection",
      items:  Array< {
        __typename: "Movie",
        id: string,
        title: string,
        poster: string,
        duration: string,
        year?: number | null,
        creator?: string | null,
        plot: string,
        categoryID: string,
        video: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    movies?:  {
      __typename: "ModelMovieConnection",
      items:  Array< {
        __typename: "Movie",
        id: string,
        title: string,
        poster: string,
        duration: string,
        year?: number | null,
        creator?: string | null,
        plot: string,
        categoryID: string,
        video: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    movies?:  {
      __typename: "ModelMovieConnection",
      items:  Array< {
        __typename: "Movie",
        id: string,
        title: string,
        poster: string,
        duration: string,
        year?: number | null,
        creator?: string | null,
        plot: string,
        categoryID: string,
        video: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateMovieMutationVariables = {
  input: CreateMovieInput,
  condition?: ModelMovieConditionInput | null,
};

export type CreateMovieMutation = {
  createMovie?:  {
    __typename: "Movie",
    id: string,
    title: string,
    poster: string,
    duration: string,
    year?: number | null,
    creator?: string | null,
    plot: string,
    categoryID: string,
    video: string,
    episode?:  {
      __typename: "ModelEpisodeConnection",
      items:  Array< {
        __typename: "Episode",
        id: string,
        title: string,
        duration?: string | null,
        poster: string,
        video: string,
        movieID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMovieMutationVariables = {
  input: UpdateMovieInput,
  condition?: ModelMovieConditionInput | null,
};

export type UpdateMovieMutation = {
  updateMovie?:  {
    __typename: "Movie",
    id: string,
    title: string,
    poster: string,
    duration: string,
    year?: number | null,
    creator?: string | null,
    plot: string,
    categoryID: string,
    video: string,
    episode?:  {
      __typename: "ModelEpisodeConnection",
      items:  Array< {
        __typename: "Episode",
        id: string,
        title: string,
        duration?: string | null,
        poster: string,
        video: string,
        movieID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMovieMutationVariables = {
  input: DeleteMovieInput,
  condition?: ModelMovieConditionInput | null,
};

export type DeleteMovieMutation = {
  deleteMovie?:  {
    __typename: "Movie",
    id: string,
    title: string,
    poster: string,
    duration: string,
    year?: number | null,
    creator?: string | null,
    plot: string,
    categoryID: string,
    video: string,
    episode?:  {
      __typename: "ModelEpisodeConnection",
      items:  Array< {
        __typename: "Episode",
        id: string,
        title: string,
        duration?: string | null,
        poster: string,
        video: string,
        movieID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateEpisodeMutationVariables = {
  input: CreateEpisodeInput,
  condition?: ModelEpisodeConditionInput | null,
};

export type CreateEpisodeMutation = {
  createEpisode?:  {
    __typename: "Episode",
    id: string,
    title: string,
    duration?: string | null,
    poster: string,
    video: string,
    movieID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateEpisodeMutationVariables = {
  input: UpdateEpisodeInput,
  condition?: ModelEpisodeConditionInput | null,
};

export type UpdateEpisodeMutation = {
  updateEpisode?:  {
    __typename: "Episode",
    id: string,
    title: string,
    duration?: string | null,
    poster: string,
    video: string,
    movieID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteEpisodeMutationVariables = {
  input: DeleteEpisodeInput,
  condition?: ModelEpisodeConditionInput | null,
};

export type DeleteEpisodeMutation = {
  deleteEpisode?:  {
    __typename: "Episode",
    id: string,
    title: string,
    duration?: string | null,
    poster: string,
    video: string,
    movieID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    movies?:  {
      __typename: "ModelMovieConnection",
      items:  Array< {
        __typename: "Movie",
        id: string,
        title: string,
        poster: string,
        duration: string,
        year?: number | null,
        creator?: string | null,
        plot: string,
        categoryID: string,
        video: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      title: string,
      movies?:  {
        __typename: "ModelMovieConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCategoriesQuery = {
  syncCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      title: string,
      movies?:  {
        __typename: "ModelMovieConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMovieQueryVariables = {
  id: string,
};

export type GetMovieQuery = {
  getMovie?:  {
    __typename: "Movie",
    id: string,
    title: string,
    poster: string,
    duration: string,
    year?: number | null,
    creator?: string | null,
    plot: string,
    categoryID: string,
    video: string,
    episode?:  {
      __typename: "ModelEpisodeConnection",
      items:  Array< {
        __typename: "Episode",
        id: string,
        title: string,
        duration?: string | null,
        poster: string,
        video: string,
        movieID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMoviesQueryVariables = {
  filter?: ModelMovieFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMoviesQuery = {
  listMovies?:  {
    __typename: "ModelMovieConnection",
    items:  Array< {
      __typename: "Movie",
      id: string,
      title: string,
      poster: string,
      duration: string,
      year?: number | null,
      creator?: string | null,
      plot: string,
      categoryID: string,
      video: string,
      episode?:  {
        __typename: "ModelEpisodeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMoviesQueryVariables = {
  filter?: ModelMovieFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMoviesQuery = {
  syncMovies?:  {
    __typename: "ModelMovieConnection",
    items:  Array< {
      __typename: "Movie",
      id: string,
      title: string,
      poster: string,
      duration: string,
      year?: number | null,
      creator?: string | null,
      plot: string,
      categoryID: string,
      video: string,
      episode?:  {
        __typename: "ModelEpisodeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetEpisodeQueryVariables = {
  id: string,
};

export type GetEpisodeQuery = {
  getEpisode?:  {
    __typename: "Episode",
    id: string,
    title: string,
    duration?: string | null,
    poster: string,
    video: string,
    movieID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListEpisodesQueryVariables = {
  filter?: ModelEpisodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEpisodesQuery = {
  listEpisodes?:  {
    __typename: "ModelEpisodeConnection",
    items:  Array< {
      __typename: "Episode",
      id: string,
      title: string,
      duration?: string | null,
      poster: string,
      video: string,
      movieID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncEpisodesQueryVariables = {
  filter?: ModelEpisodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEpisodesQuery = {
  syncEpisodes?:  {
    __typename: "ModelEpisodeConnection",
    items:  Array< {
      __typename: "Episode",
      id: string,
      title: string,
      duration?: string | null,
      poster: string,
      video: string,
      movieID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    movies?:  {
      __typename: "ModelMovieConnection",
      items:  Array< {
        __typename: "Movie",
        id: string,
        title: string,
        poster: string,
        duration: string,
        year?: number | null,
        creator?: string | null,
        plot: string,
        categoryID: string,
        video: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    movies?:  {
      __typename: "ModelMovieConnection",
      items:  Array< {
        __typename: "Movie",
        id: string,
        title: string,
        poster: string,
        duration: string,
        year?: number | null,
        creator?: string | null,
        plot: string,
        categoryID: string,
        video: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    movies?:  {
      __typename: "ModelMovieConnection",
      items:  Array< {
        __typename: "Movie",
        id: string,
        title: string,
        poster: string,
        duration: string,
        year?: number | null,
        creator?: string | null,
        plot: string,
        categoryID: string,
        video: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateMovieSubscription = {
  onCreateMovie?:  {
    __typename: "Movie",
    id: string,
    title: string,
    poster: string,
    duration: string,
    year?: number | null,
    creator?: string | null,
    plot: string,
    categoryID: string,
    video: string,
    episode?:  {
      __typename: "ModelEpisodeConnection",
      items:  Array< {
        __typename: "Episode",
        id: string,
        title: string,
        duration?: string | null,
        poster: string,
        video: string,
        movieID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMovieSubscription = {
  onUpdateMovie?:  {
    __typename: "Movie",
    id: string,
    title: string,
    poster: string,
    duration: string,
    year?: number | null,
    creator?: string | null,
    plot: string,
    categoryID: string,
    video: string,
    episode?:  {
      __typename: "ModelEpisodeConnection",
      items:  Array< {
        __typename: "Episode",
        id: string,
        title: string,
        duration?: string | null,
        poster: string,
        video: string,
        movieID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMovieSubscription = {
  onDeleteMovie?:  {
    __typename: "Movie",
    id: string,
    title: string,
    poster: string,
    duration: string,
    year?: number | null,
    creator?: string | null,
    plot: string,
    categoryID: string,
    video: string,
    episode?:  {
      __typename: "ModelEpisodeConnection",
      items:  Array< {
        __typename: "Episode",
        id: string,
        title: string,
        duration?: string | null,
        poster: string,
        video: string,
        movieID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateEpisodeSubscription = {
  onCreateEpisode?:  {
    __typename: "Episode",
    id: string,
    title: string,
    duration?: string | null,
    poster: string,
    video: string,
    movieID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateEpisodeSubscription = {
  onUpdateEpisode?:  {
    __typename: "Episode",
    id: string,
    title: string,
    duration?: string | null,
    poster: string,
    video: string,
    movieID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteEpisodeSubscription = {
  onDeleteEpisode?:  {
    __typename: "Episode",
    id: string,
    title: string,
    duration?: string | null,
    poster: string,
    video: string,
    movieID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
