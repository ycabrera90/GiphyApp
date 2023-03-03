import { RootState } from "redux/app/store";

export const selectAppMessage = (state: RootState) => state.ui.message;
