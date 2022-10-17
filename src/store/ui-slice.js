import { createSlice } from "@reduxjs/toolkit"; // tambien se puede usar el createReducer pero el createSlice es mas potente

const initialUiState = { message: { text: null, type: null } };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    sendMessage(state, action) {
      state.message = action.payload;
    },
    cleanMessage(state) {
      state.message = initialUiState.message;
    },
  },
});

export const uiActions = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
