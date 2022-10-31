import { Button, Pagination, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { selectFilterAll } from "../../store/slice/filter-gender-color";
import { selectPagFilter } from "../../store/slice/pag-filter-slice";
import { selectPokemon } from "../../store/slice/pokemon-slice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { CardPokemon } from "./card-pokemon";

type cardsProps = {
  data?: any;
};
export const CardsPokemon = () => {
  const dispatch = useAppDispatch();
  var filterSlice: any = [];
  var dataInit: any = [];

  const { data, error, page } = useAppSelector(selectPokemon);
  const { slice } = useAppSelector((state) => state.pagFilter);
  const { dataFilter, errorFilter } = useAppSelector(selectFilterAll);
  const dataFilterPage = dataFilter;

  const filterPok = dataFilterPage.filter((item: any) => {
    if (item !== undefined) {
      return item;
    }
  });
  const dataSlice = filterPok.slice(slice[0], slice[1]);

  dataSlice.length !== 0 ? (dataInit = dataSlice) : (dataInit = data);

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center" marginY="5%">
      {dataInit.length != 0 &&
        dataInit.map((pokemon: any) => {
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
