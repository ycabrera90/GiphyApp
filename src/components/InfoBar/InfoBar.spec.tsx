import "@testing-library/jest-dom";
import InfoBar from "./InfoBar";
import { render, act, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "redux/app/store";
import { sendMessage } from "redux/reducers/ui.actions";
import { MSSG } from "global/messages";

const InfoBarFactory = () => {
  act(() => {
    render(
      <Provider store={store}>
        <InfoBar />
      </Provider>
    );
  });
};

describe("InfoBar Component", () => {
  it("If there are no messages in the state ({ text: null, type: null }) the component should not to be in the DOM", async () => {
    InfoBarFactory();

    await waitFor(() => {
      const infoBar = screen.queryByTestId("InfoBar");
      expect(infoBar).not.toBeInTheDocument();
    });
  });

  it("the bar should have the correct text of the message field ", async () => {
    InfoBarFactory();

    act(() => store.dispatch(sendMessage(MSSG.ALERT)));

    expect(screen.queryByText(MSSG.ALERT.text)).toBeInTheDocument();
  });

  it("the bar should have the correct class base on the type of the message field ", async () => {
    InfoBarFactory();

    act(() => store.dispatch(sendMessage(MSSG.ALERT)));

    await waitFor(() => {
      const infoBar = screen.queryByTestId("InfoBar");
      expect(infoBar).toHaveClass(MSSG.ALERT.type);
    });
  });
});
