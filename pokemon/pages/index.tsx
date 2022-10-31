import { Link } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { LayoutPokemons } from "../src/layout/layout-pokemon";
import { getAllColor } from "../src/store/slice/color-all-slice";
import { selectFilterAll } from "../src/store/slice/filter-gender-color";
import { getAllGender } from "../src/store/slice/gender-all-slice";
import { increment, pagFilterSlice } from "../src/store/slice/pag-filter-slice";
import { getPokemon, selectPokemon } from "../src/store/slice/pokemon-slice";
import { useAppSelector, useAppDispatch, store } from "../src/store/store";

export default function Home() {
  const dispatch = useAppDispatch();
  const { page } = useAppSelector(selectPokemon);
  const { dataFilter } = useAppSelector(selectFilterAll);
  const { slice } = useAppSelector((state) => state.pagFilter);

  useEffect(() => {
    const despaches = async () => {
      const pageRel = page == 0 ? page : page - 1;
      await dispatch(getPokemon(pageRel));
      await dispatch(getAllGender());
      await dispatch(getAllColor());
      dispatch(increment([-5, 0]));
    };
    despaches();
  }, [dispatch]);

  return <LayoutPokemons />;
}
