import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { uiReducer } from "redux/reducers/ui.reducer";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
