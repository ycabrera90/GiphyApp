import { cleanMessage, sendMessage } from "./ui.actions";
import { initialState, uiReducer } from "./ui.reducer";

describe("ui Reducer", () => {
  it("should return the initial state", () => {
    const state = uiReducer(undefined, { type: undefined });
    expect(state).toEqual(initialState);
  });

  it("only the message field should change when the sendMessage action is dispatched", () => {
    const action = {
      type: sendMessage,
      payload: { text: "Hello", type: "info" },
    };
    const state = uiReducer(undefined, action);
    expect(state).toEqual({ ...state, message: action.payload });
  });

  it("the message field should be updated with the payload when the sendMessage action is dispatched", () => {
    const action = {
      type: sendMessage,
      payload: { text: "Hello", type: "info" },
    };
    const state = uiReducer(undefined, action);
    expect(state.message).toEqual(action.payload);
  });

  it("only the message field should change to it initial state when the cleanMessage action is dispatched", () => {
    const action = { type: cleanMessage };
    const state = uiReducer(undefined, action);
    expect(state).toEqual({ ...state, message: initialState.message });
  });
});
