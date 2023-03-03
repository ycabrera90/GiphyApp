import { createReducer } from '@reduxjs/toolkit';
import { IUiState } from 'models/UiState.type';
import { cleanMessage, sendMessage } from "./ui.actions";

export const initialState: IUiState = { message: { text: null, type: null } };

export const uiReducer = createReducer(initialState, (builder) => {
  builder.addCase(sendMessage, (state, action) => ({
    ...state,
    message: action.payload,
  }));

  builder.addCase(cleanMessage, (state) => ({
    ...state,
    message: initialState.message,
  }));
});
