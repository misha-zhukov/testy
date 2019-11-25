import { IQuestion } from "./IQuestion";

export interface IStep {
  title: string;
  content: any;
  quiz: IQuestion;
}
