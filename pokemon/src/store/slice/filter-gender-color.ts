import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
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
      return [pok, image];
    });

    const result = await Promise.allSettled(pokemon).then((results) => {
      return results;
    });
    const filter = result.map(({ value }: any) => value);
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
