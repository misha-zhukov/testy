import { IQuestion } from "./IQuestion";
import { IOption } from './IOption';

export interface IStep {
  title: string;
  content: string;
  question: string;
  options: IOption[];
}
