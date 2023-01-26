import { InputContainer } from "./styles";

interface InputProps {
  type?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const Input = (props: InputProps) => {
  return <InputContainer {...props} data-testid="input" />;
};
