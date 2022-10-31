import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { ButtonPagination } from "../components/button-pagination/button-pagination";
import { FilterGender } from "../components/filters/filter-gender";
import { MenuFilters } from "../components/filters/menu-filters";
import { CardsPokemon } from "../components/show-pokemons/cards-pokemns";
import { increment } from "../store/slice/pag-filter-slice";
import { getPokemon } from "../store/slice/pokemon-slice";
import { useAppDispatch, persistor } from "../store/store";

export const LayoutPokemons = () => {
  const dispatch = useAppDispatch();
  return (
    <Grid
      container
      spacing={2}
      sx={{ backgroundColor: "rgba(6, 6, 5)", minHeight: "100vh" }}
    >
      <Grid item xs={12} md={12} display="flex" width="100%" marginTop="2%">
        <Box display="flex" width="50%" marginLeft="5%" justifyContent="start">
          <Typography
            fontSize={{ sx: "1.5 rem", sm: "1.5 rem", md: "2rem", lg: "2rem" }}
            sx={{
              color: "#EDEDED",
              opacity: "0.6",
              margin: "2% 3%",
            }}
          >
            Pokemón Cards
          </Typography>
        </Box>
        <Box display="flex" width="50%" marginRight="5%" justifyContent="end">
          <Box display="flex" flexDirection="column">
            <MenuFilters />
            <Typography
              onClick={async () => {
                await dispatch(getPokemon(0));
                localStorage.clear();
                await persistor.purge();
                dispatch(increment([0, 0, "clear"]));
              }}
              sx={{
                color: "#EDEDED",
                opacity: "0.6",
                fontSize: {
                  sx: "1 rem",
                  sm: "1 rem",
                  md: "1.2rem",
                  lg: "1.2rem",
                },
                "&:hover": { color: "#4e34e1", fontSize: "1.5rem" },
              }}
            >
              Volver a Todo
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} md={12}>
        <Box>
          <CardsPokemon />
        </Box>
      </Grid>
      <Grid item xs={12} md={12}>
        <Box display="flex" justifyContent="end">
          <ButtonPagination />
        </Box>
      </Grid>
    </Grid>
  );
};
