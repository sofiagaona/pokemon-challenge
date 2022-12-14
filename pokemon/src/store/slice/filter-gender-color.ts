import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Console } from "console";
import { filterData, mapingColor, mapingGender } from "../../util/maping-data";

import type { RootState } from "../store";

export type FilterAllState = {
  dataFilter: any;
  pendingFilter: boolean;
  errorFilter: boolean;
};

const initialState: FilterAllState = {
  dataFilter: [],
  pendingFilter: false,
  errorFilter: false,
};

export const getFilter = createAsyncThunk(
  "filterAll/filterAll",
  async (filters: any) => {
    var color: any = [];
    var gender: any = [];

    const response = await axios.get(
      `https://pokeapi.co/api/v2/gender/${filters[0]}`
    );

    const genderFilter = await response.data.pokemon_species_details;
    if (genderFilter !== undefined) {
      gender = mapingGender(genderFilter);
    }

    const responseColor = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-color/${filters[1]}`
    );
    const colorFilter = await responseColor.data.pokemon_species;
    if (colorFilter !== undefined) {
      color = mapingColor(colorFilter);
    }
    const dataFilter = filterData(gender, color);
    const pokemon = dataFilter.map(async (pok: any) => {
      const image = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pok}`)
        .then((pokInf) => {
          return pokInf.data.sprites.front_default;
        });

      const type = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pok}`)
        .then((type) => {
          return type.data.types[0].type.name;
        });

      const base_experiencie = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pok}`)
        .then((base) => {
          return base.data.base_experience.toString();
        });

      const abiliti = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pok}`)
        .then((abiliti) => {
          return abiliti.data.abilities[0].ability.name;
        });

      return [pok, image, type, base_experiencie, abiliti];
    });

    const result = await Promise.allSettled(pokemon).then((results) => {
      return results;
    });

    const filter = result.map(({ value }: any) => value);
    console.log("filter", "filter");

    return filter;
  }
);

export const filterAllSlice = createSlice({
  name: "filterAll",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFilter.pending, (state) => {
        state.pendingFilter = true;
      })
      .addCase(getFilter.fulfilled, (state, { payload }) => {
        state.pendingFilter = false;
        state.errorFilter = false;
        state.dataFilter = payload;
      })
      .addCase(getFilter.rejected, (state) => {
        state.pendingFilter = false;
        state.errorFilter = true;
      });
  },
});

export const selectFilterAll = (state: RootState) => state.filterAll;
export const filterAllReducer = filterAllSlice.reducer;
