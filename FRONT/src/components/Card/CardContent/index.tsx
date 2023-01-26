import ReactMarkdown from "react-markdown";
import { TextArea } from "../../TextArea";
import { Content } from "../styles";

interface CardContentProps {
  isDisplayMode: boolean;
  conteudo: string;
  setEditedContent: (content: string) => void;
  changedContent: string;
}

export const CardContent = ({
  isDisplayMode,
  conteudo,
  setEditedContent,
  changedContent,
}: CardContentProps) => {
  return isDisplayMode ? (
    <Content data-testid="card-content">
      <ReactMarkdown>{conteudo}</ReactMarkdown>
    </Content>
  ) : (
    <TextArea data-testid="card-content"
      onChange={(e) => setEditedContent(e.target.value)}
      value={changedContent}
    />
  );
};
