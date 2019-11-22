import { ICourse } from './ICourse';

export class Course implements ICourse {
  _id: string;
  title: string;
  description: string;
  imgUri: string;
}