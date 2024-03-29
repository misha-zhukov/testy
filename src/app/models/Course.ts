import { ICourse } from './ICourse';
import { ILesson } from './ILesson';

export class Course implements ICourse {
  _id: string;
  title: string;
  description: string;
  imgUri: string;
  lessons: ILesson[] = [];
  img: string;
  public get fullImgUrl() {
    return `/api/${this.img}`;
  }

}
