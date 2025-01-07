import { Sizes } from "./globalStyles";

export interface SliderProps {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  fullWidth?: boolean;
  size?: Sizes;
  marks?: { [key: number]: string | React.ReactNode };
  className?: string;
  onChange?: (value: number) => void;
}

export interface SliderWithRangeProps extends Omit<SliderProps, "value"> {
  value?: number | [number, number];
  defaultValue?: number | [number, number];
  range?: boolean;
}
