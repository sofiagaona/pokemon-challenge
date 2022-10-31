import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export type pagFilterState = {
  pending?: boolean;
  error?: boolean;
  slice: any[];
};

const initialState: pagFilterState = {
  pending: false,
  error: false,
  slice: [],
};

export const pagFilterSlice = createSlice({
  name: "pagFilter",
  initialState,
  reducers: {
    increment: (state, action) => {
      console.log("action", action.payload);
      state.slice = [action.payload[0] + 5, action.payload[1] + 5];
    },
  },
});
export const { increment } = pagFilterSlice.actions;
export const selectPagFilter = (state: RootState) => state.pagFilter;
export const pagFilterReducer = pagFilterSlice.reducer;
