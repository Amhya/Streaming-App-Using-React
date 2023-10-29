// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Category, Movie, Episode } = initSchema(schema);

export {
  Category,
  Movie,
  Episode
};