import { createAction } from "@reduxjs/toolkit";
import { IUiState } from "models/UiState.type";

export const sendMessage = createAction<IUiState["message"]>("ui/sendMessage");

export const cleanMessage = createAction("ui/cleanMessage");
