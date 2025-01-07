import { Sizes } from "./globalStyles";

export interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  loading?: boolean;
  size?: Sizes;
  className?: string;
  onChange?: (checked: boolean) => void;
}
