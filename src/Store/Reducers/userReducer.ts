import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../Types/types";
import apiService from "../../ApiService/apiService";
import { FormStateType, SearchDataType } from "../../Types/types";

type StateType = {
  users: User[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  filteredUsers: User[];
};

const initialState: StateType = {
  users: [],
  status: "idle",
  error: null,
  filteredUsers: [],
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const data = await apiService.getUsers();
  return data;
});

const userReducer = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
      state.filteredUsers = action.payload;
    },
    filterBy(state, payload: PayloadAction<FormStateType>) {
      const formData = payload.payload;

      state.filteredUsers = state.users.filter((user) => {
        return formData.every((form) => {
          const { key, value } = form;
          if (key && value) {
            return user[key].toLowerCase().includes(value.toLowerCase());
          }
          return true;
        });
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch users";
      });
  },
});

export const { filterBy, setUsers } = userReducer.actions;

export default userReducer.reducer;
