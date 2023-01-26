import ReactMarkdown from "react-markdown";
import * as Styled from "./styles";
import TextArea from "../../TextArea";

interface CardContentProps {
  isDisplayMode: boolean;
  conteudo: string;
  setEditedContent: (content: string) => void;
  changedContent: string;
}

const CardContent = ({
  isDisplayMode,
  conteudo,
  setEditedContent,
  changedContent,
}: CardContentProps) => {
  return isDisplayMode ? (
    <Styled.Content>
      <ReactMarkdown>{conteudo}</ReactMarkdown>
    </Styled.Content>
  ) : (
    <Styled.EditContent>
      <TextArea
        onChange={(e) => setEditedContent(e.target.value)}
        value={changedContent}
      />
    </Styled.EditContent>
  );
};

export default CardContent;
