import { Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { useAppDispatch } from "../../store/store";
import { getPokemon } from "../../store/slice/pokemon-slice";

type buttonPaginationProps = {
  page: number;
};

export const ButtonPagination = ({ page }: buttonPaginationProps) => {
  const dispatch = useAppDispatch();

  const pokemonPageNext = async () => {
    await dispatch(getPokemon(page));
  };
  const pokemonPagePrevis = async () => {
    await dispatch(getPokemon(page - 2));
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
