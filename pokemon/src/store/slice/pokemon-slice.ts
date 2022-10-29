import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { RootState } from "../store";

export type RateState = {
  data: any;
  pending: boolean;
  error: boolean;
};

const initialState: RateState = {
  data: [],
  pending: false,
  error: false,
};

export const getPokemon = createAsyncThunk("pokemon/pokemon", async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
  return response.data;
});

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPokemon.pending, (state) => {
        state.pending = true;
      })
      .addCase(getPokemon.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.error = false;
        state.data = payload;
      })
      .addCase(getPokemon.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const selectPokemon = (state: RootState) => state.pokemon;
export const pokemonReducer = pokemonSlice.reducer;
