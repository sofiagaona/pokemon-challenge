import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { RootState } from "../store";

export type RateState = {
  data: any;
  page: number;
  pending: boolean;
  error: boolean;
};

const initialState: RateState = {
  data: [],
  page: 0,
  pending: false,
  error: false,
};

export const getPokemon = createAsyncThunk(
  "pokemon/pokemon",
  async (page: any) => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=5&offset=${page * 5}`
    );

    return { pokemon: response.data, page: (page += 1) };
  }
);

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
        state.data = payload.pokemon;
        state.page = payload.page;
      })
      .addCase(getPokemon.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const selectPokemon = (state: RootState) => state.pokemon;
export const pokemonReducer = pokemonSlice.reducer;
