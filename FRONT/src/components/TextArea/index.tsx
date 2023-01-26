import { TextAreaContainer } from "./styles";

interface TextAreaProps {
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  placeholder?: string;
}

export const TextArea = (props: TextAreaProps) => {
  return <TextAreaContainer {...props} />;
};
