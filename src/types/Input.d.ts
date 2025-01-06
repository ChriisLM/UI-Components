import { FontSizes } from "./globalStyles";

export type InputType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "date"
  | "tel";

export interface InputProps {
  name?: string;
  type?: InputType;
  value?: string;
  disable?: boolean;
  placeholder?: string;
  size?: FontSizes;
  fullWidth?: boolean;
  className?: string;
  onChange?: (value: string | number) => void;
}
