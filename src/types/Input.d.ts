import { FontSizes } from "./globalStyles";

export type InputType = 'text' | 'email' | 'password' | 'number' | 'date';

export interface InputProps {
  id: string;
  name?: string;
  type?: InputType;
  value?: string;
  placeholder?: string;
  size?: FontSizes;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}