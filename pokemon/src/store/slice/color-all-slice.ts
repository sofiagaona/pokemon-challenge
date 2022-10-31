import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { RootState } from "../store";

export type colorState = {
  data?: any;
  pending?: boolean;
  error?: boolean;
};

const initialState: colorState = {
  data: [],
  pending: false,
  error: false,
};

export const getAllColor = createAsyncThunk("color/allColor", async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon-color");
  const color = response.data.results;
  return color;
});

export const allColorSlice = createSlice({
  name: "allColor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllColor.pending, (state) => {
        state.pending = true;
      })
      .addCase(getAllColor.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.error = false;
        state.data = payload;
      })
      .addCase(getAllColor.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const selectAllColor = (state: RootState) => state.allColor;
export const allColorReducer = allColorSlice.reducer;
