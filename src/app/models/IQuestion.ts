import { IOption } from './IOption';

export interface IQuestion {
  title: string;
  description: string;
  options: IOption[];
}
