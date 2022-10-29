import { Button, Pagination, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { getPokemon, selectPokemon } from "../../store/slice/pokemon-slice";
import { useAppSelector, useAppDispatch } from "../../store/store";

export const CardsPokemon = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getPokemon(0));
    };
    fetchData();
  }, []);

  const { data, error, page } = useAppSelector(selectPokemon);

  const pokemonPageNext = async () => {
    await dispatch(getPokemon(page));
  };
  const pokemonPagePrevis = async () => {
    await dispatch(getPokemon(page - 2));
  };
  return (
    <Box>
      <Typography>Cartas de Pokemos</Typography>
      {data &&
        data.results.map((pokemon: any) => {
          return <li key={pokemon.name}>{pokemon.name}</li>;
        })}
      <Button variant="outlined" onClick={pokemonPageNext}>
        Next
      </Button>
      {page > 1 && (
        <Button variant="outlined" onClick={pokemonPagePrevis}>
          Previus
        </Button>
      )}
    </Box>
  );
};
