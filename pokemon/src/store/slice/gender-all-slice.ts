import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { RootState } from "../store";

export type genderState = {
  data?: any;
  pending?: boolean;
  error?: boolean;
};
type genderProps = {
  value?: any;
};

const initialState: genderState = {
  data: [],
  pending: false,
  error: false,
};

export const getAllGender = createAsyncThunk("gender/allGender", async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/gender/");
  const gender = response.data.results;
  return gender;
});

export const allGenderSlice = createSlice({
  name: "allGender",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllGender.pending, (state) => {
        state.pending = true;
      })
      .addCase(getAllGender.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.error = false;
        state.data = payload;
      })
      .addCase(getAllGender.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const selectAllGender = (state: RootState) => state.allGender;
export const allGenderReducer = allGenderSlice.reducer;
