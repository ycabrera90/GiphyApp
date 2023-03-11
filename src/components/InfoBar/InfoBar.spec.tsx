import "@testing-library/jest-dom";
import { render, act } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "redux/app/store";
import { sendMessage } from "redux/reducers/ui.actions";
import { MSSG } from "global/messages";
import InfoBar from "./InfoBar";

const InfoBarFactory = async () => {
  const renderMethods = render(
    <Provider store={store}>
      <InfoBar />
    </Provider>
  );
  return {
    ...renderMethods,
    infoBar: renderMethods.queryByTestId("InfoBar"),
  };
};

describe("InfoBar Component", () => {
  it("If there are no messages in the state ({ text: null, type: null }) the component should not to be in the DOM", async () => {
    const { infoBar } = await InfoBarFactory();
    expect(infoBar).not.toBeInTheDocument();
  });

  it("the bar should have the correct text of the message field ", async () => {
    const { queryByText } = await InfoBarFactory();
    act(() => store.dispatch(sendMessage(MSSG.ALERT)));
    expect(queryByText(MSSG.ALERT.text)).toBeInTheDocument();
  });

  it("the bar should have the correct class base on the type of the message field ", async () => {
    const { infoBar } = await InfoBarFactory();
    act(() => store.dispatch(sendMessage(MSSG.ALERT)));
    expect(infoBar).toHaveClass(MSSG.ALERT.type);
  });
});