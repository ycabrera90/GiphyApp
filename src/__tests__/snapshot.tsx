import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "redux/app/store";
import App from "App";

it("renders App unchanged", async () => {
  const container = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(container).toMatchSnapshot();
});
