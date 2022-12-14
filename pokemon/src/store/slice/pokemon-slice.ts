import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { RootState } from "../store";

export type PokemonState = {
  data: any;
  page: number;
  pending: boolean;
  error: boolean;
};

const initialState: PokemonState = {
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
    const pokemon = response.data.results.map(async (pok: any) => {
      const image = await axios.get(pok.url).then((pokInf) => {
        return pokInf.data.sprites.front_default;
      });
      const type = await axios.get(pok.url).then((type) => {
        return type.data.types[0].type.name;
      });
      const base_experiencie = await axios.get(pok.url).then((base) => {
        return base.data.base_experience.toString();
      });
      const abiliti = await axios.get(pok.url).then((abiliti) => {
        return abiliti.data.abilities[0].ability.name;
      });

      return [pok.name, image, type, base_experiencie, abiliti];
    });

    const result = await Promise.all(pokemon).then((results) => {
      return results;
    });

    return { pokemon: result, page: (page += 1) };
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
