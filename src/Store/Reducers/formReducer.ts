import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { FormStateType, SearchDataType } from "../../Types/types";

const initialState: FormStateType = [];

const formReducer = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSortData(
      state: SearchDataType[],
      action: PayloadAction<SearchDataType>
    ) {
      const inputKeyInd = state.findIndex(
        (data) => data.key === action.payload.key
      );
      if (inputKeyInd > -1) {
        state[inputKeyInd] = {
          key: action.payload.key,
          value: action.payload.value,
        };
      } else {
        state.push({
          key: action.payload.key,
          value: action.payload.value,
        });
      }
    },
  },
});

export const { setSortData } = formReducer.actions;

export default formReducer.reducer;
