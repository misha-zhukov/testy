import { ILesson } from './ILesson';

export class Lesson implements ILesson {
  _id: string;
  title: string;  
  data: any;
}