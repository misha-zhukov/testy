import { IStep } from "./IStep";
import { IOption } from "./IOption";

export class Step implements IStep {
  question: string;
  options: IOption[] = [];
  title: string;
  content: any;
}
