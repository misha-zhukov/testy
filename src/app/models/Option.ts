import { IOption } from './IOption';

export class Option implements IOption {
  checked: boolean = false;
  option: string;
  right: boolean;
}
