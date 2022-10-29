import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { getPokemon, selectPokemon } from "../../store/slice/pokemon-slice";
import { useAppSelector, useAppDispatch } from "../../store/store";

export const CardsPokemon = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getPokemon());
    };
    fetchData();
  }, []);

  const { data, error } = useAppSelector(selectPokemon);

  return (
    <Box>
      <Typography>Cartas de Pokemos</Typography>
    </Box>
  );
};
