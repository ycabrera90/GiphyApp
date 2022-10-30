import { createPortal } from "react-dom";
import InfoBar from "components/InfoBar/InfoBar";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "redux/app/store";

const root = ReactDOM.createRoot(document.getElementById("root")!);
const messages = createPortal(<InfoBar />, document.getElementById("message")!);

root.render(
  <Provider store={store}>
    {messages}
    <App />
  </Provider>
);
