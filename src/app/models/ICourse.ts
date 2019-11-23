import { ILesson } from './ILesson';

export interface ICourse {
  _id: string;
  title: string;
  description: string;
  imgUri: string;
  lessons: ILesson[];
}
