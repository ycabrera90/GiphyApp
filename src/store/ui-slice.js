import { createSlice } from "@reduxjs/toolkit"; // tambien se puede usar el createReducer pero el createSlice es mas potente

const initialUiState = { message: { type: "", text: "" } };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    sendMessage(state, action) {
      state.message = action.payload;
    },
    cleanMessage(state) {
      state.message = initialUiState;
    },
  },
});

export const uiActions = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
