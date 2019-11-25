import { IStep } from "./IStep";
import { IQuestion } from "./IQuestion";

export class Step implements IStep {
  title: string;
  content: any;
  quiz: IQuestion;
}
