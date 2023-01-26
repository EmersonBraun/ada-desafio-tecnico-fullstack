import * as Styled from "./styles";

interface TextAreaProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  placeholder?: string;
}

const TextArea = (props: TextAreaProps) => {
  return <Styled.TextArea {...props} />;
};

export default TextArea;
