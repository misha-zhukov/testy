import { IQuestion } from './IQuestion';

export interface ICourse {
  id: string;
  _id: string;
  title: string;
  description: string;
  imgUri: string;
  questions: IQuestion[];
}
