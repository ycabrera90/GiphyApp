import { FC } from "react";
import { useHistory } from "react-router-dom";

export const ControlApp: FC = () => {
  const history = useHistory();
  return (
    <button data-testid="ControlApp" onClick={() => history.push("/")}>
      Click for generate an event an change the path
    </button>
  );
};
