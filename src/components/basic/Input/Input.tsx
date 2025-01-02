import { InputProps } from "../../../types/Input";

export function Input({
  id,
  name,
  type = "text",
  value,
  placeholder,
  size = "medium",
  className = "",
  onChange,
}: InputProps) {
  const inputClassName = `
    input 
    input-${size} 
    ${className}
  `.trim();

  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      className={inputClassName}
      onChange={onChange}
    />
  );
}
