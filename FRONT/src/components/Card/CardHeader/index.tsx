import { FaEdit } from "react-icons/fa";
import { EDIT_MODE } from "../../../constants";
import { Input } from "../../Input";
import { Title, ClickableIcon } from "../styles";

interface CardHeaderProps {
  isDisplayMode: boolean;
  titulo: string;
  setViewMode: (mode: string) => void;
  changedTitle: string;
  setChangedTitle: (title: string) => void;
}

export const CardHeader = ({
  isDisplayMode,
  titulo,
  setViewMode,
  changedTitle,
  setChangedTitle,
}: CardHeaderProps) => {
  return isDisplayMode ? (
    <>
      <Title data-testid="card-header">{titulo}</Title>
      <ClickableIcon onClick={() => setViewMode(EDIT_MODE)}>
        <FaEdit size={20} />
      </ClickableIcon>
    </>
  ) : (
    <Input data-testid="card-header"
      type="text"
      onChange={(e) => setChangedTitle(e.target.value)}
      value={changedTitle}
    />
  );
};
