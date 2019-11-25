import { IStep } from "./IStep";

export interface ILesson {
  _id: string;
  title: string;
  steps: IStep[];
}
