import { Sizes } from "./globalStyles";

export interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface SelectProps {
  name?: string;
  options: SelectOption[];
  value?: string | string[];
  placeholder?: string;
  disabled?: boolean;
  size?: Sizes;
  className?: string;
  onChange?: (value: string | string[]) => void;
  //add search onShearch => void
}
