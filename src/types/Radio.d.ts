import { Sizes } from "./globalStyles";

export interface RadioProps {
  name?: string;
  label?: string;
  size?: Sizes;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  onChange?: (checked: boolean) => void;
}

export interface RadioGroupProps extends RadioProps {
  value?: string;
  defaulValue?: string;
  children?: React.ReactNode;
}
