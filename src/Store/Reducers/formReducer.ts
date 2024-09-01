import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { FormStateType } from "../../Types/types";

const initialState: FormStateType = {
  value: "",
  key: null,
};

const formReducer = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSortData(state, action: PayloadAction<FormStateType | null>) {
      state.key = action.payload?.key ?? null;
      state.value = action.payload?.value ?? "";
    },
  },
});

export const { setSortData } = formReducer.actions;

export default formReducer.reducer;
