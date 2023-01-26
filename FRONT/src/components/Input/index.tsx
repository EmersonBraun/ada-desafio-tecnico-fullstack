import * as Styled from "./styles";

interface InputProps {
  type?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Input = (props: InputProps) => {
  return <Styled.Input {...props} />;
};

export default Input;
