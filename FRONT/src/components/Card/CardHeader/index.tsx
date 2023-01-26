import { FaEdit } from "react-icons/fa";
import { EDIT_MODE } from "../../../constants";
import Input from "../../Input";
import * as Styled from "./styles";

interface CardHeaderProps {
  isDisplayMode: boolean;
  titulo: string;
  setViewMode: (mode: string) => void;
  changedTitle: string;
  setChangedTitle: (title: string) => void;
}

const CardHeader = ({
  isDisplayMode,
  titulo,
  setViewMode,
  changedTitle,
  setChangedTitle,
}: CardHeaderProps) => {
  return isDisplayMode ? (
    <>
      <Styled.Title>{titulo}</Styled.Title>
      <Styled.ClickableIcon onClick={() => setViewMode(EDIT_MODE)}>
        <FaEdit size={20} />
      </Styled.ClickableIcon>
    </>
  ) : (
    <Input
      type="text"
      onChange={(e) => setChangedTitle(e.target.value)}
      value={changedTitle}
    />
  );
};

export default CardHeader;
