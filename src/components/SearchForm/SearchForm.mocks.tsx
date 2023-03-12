import { FC } from "react";
import { useHistory } from "react-router-dom";

export const FakeComponent: FC = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <button data-testid="FakeComponent" onClick={handleClick}>
      Click for generate an event an change the path
    </button>
  );
};
