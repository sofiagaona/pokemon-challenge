import { Button, Pagination, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { CardPokemon } from "./card-pokemon";

type cardsProps = {
  data?: any;
};
export const CardsPokemon = ({ data }: cardsProps) => {
  console.log("datacardas", data);
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center" marginY="5%">
      {data.length != 0 &&
        data.map((pokemon: any) => {
          return (
            <CardPokemon
              key={pokemon[0]}
              name={pokemon[0]}
              image={pokemon[1]}
            />
          );
        })}
    </Box>
  );
};
