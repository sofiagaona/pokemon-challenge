import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { LayoutPokemons } from "../src/layout/layout-pokemon";
import { getPokemon, selectPokemon } from "../src/store/slice/pokemon-slice";
import { useAppSelector, useAppDispatch } from "../src/store/store";

export default function Home() {
  const dispatch = useAppDispatch();
  const { data, error, page } = useAppSelector(selectPokemon);
  useEffect(() => {
    dispatch(getPokemon(page));
  }, []);

  console.log("DATA", data);
  return <LayoutPokemons page={page} data={data} />;
}
