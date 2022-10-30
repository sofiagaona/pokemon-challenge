import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { ButtonPagination } from "../components/button-pagination/button-pagination";
import { CardsPokemon } from "../components/show-pokemons/cards-pokemns";

type pokemonProps = {
  data?: any;
  page: number;
};

export const LayoutPokemons = ({ data, page }: pokemonProps) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ backgroundColor: "rgba(6, 6, 5)", minHeight: "100vh" }}
    >
      <Grid item xs={12} md={12}>
        <Box>
          <Typography
            variant="h2"
            sx={{ color: "#EDEDED", opacity: "0.6", margin: "2% 3%" }}
          >
            Pokemon Cards
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={12}>
        <Box>
          <CardsPokemon data={data} />
        </Box>
      </Grid>
      <Grid item xs={12} md={12}>
        <Box display="flex" justifyContent="end">
          <ButtonPagination page={page} />
        </Box>
      </Grid>
    </Grid>
  );
};
