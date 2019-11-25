import { ILesson } from "./ILesson";
import { IStep } from "./IStep";

export class Lesson implements ILesson {
  _id: string;
  title: string;
  steps: IStep[] = [];
}
