import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getPokemon, selectPokemon } from "../../store/slice/pokemon-slice";
import { increment } from "../../store/slice/pag-filter-slice";

export const ButtonPagination = () => {
  const { page } = useAppSelector(selectPokemon);
  const { slice } = useAppSelector((state) => state.pagFilter);
  const dispatch = useAppDispatch();

  const pokemonPageNext = async () => {
    await dispatch(getPokemon(page));
    dispatch(increment(slice));
  };
  const pokemonPagePrevis = async () => {
    await dispatch(getPokemon(page - 2));
    dispatch(increment([slice[0] - 10, slice[1] - 10]));
  };
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="end"
      marginRight="3%"
      marginTop="5%"
      marginBottom={{ xs: "5%", sm: "5%", md: "0", lg: "0" }}
    >
      <Button
        sx={{ marginRight: "2%", width: "100px" }}
        variant="contained"
        onClick={pokemonPageNext}
      >
        Next
      </Button>

      {page > 1 && (
        <Button
          variant="contained"
          onClick={pokemonPagePrevis}
          sx={{ width: "100px" }}
        >
          Previus
        </Button>
      )}
    </Box>
  );
};
