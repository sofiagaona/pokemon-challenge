import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import { selectAllColor } from "../../store/slice/color-all-slice";
import {
  getAllGender,
  selectAllGender,
} from "../../store/slice/gender-all-slice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import Filter from "./filter";
import { getFilter } from "../../store/slice/filter-gender-color";
import Router from "next/router";
import { increment } from "../../store/slice/pag-filter-slice";

type filterColorProps = {
  value: string;
};
export const FilterColor = ({ value }: filterColorProps) => {
  const { data, error } = useAppSelector(selectAllColor);
  const [color, setColor] = useState("");
  const [disable, setDisable] = useState(true);
  const dispatch = useAppDispatch();

  const handleChange = (event: any) => {
    setColor(event.target.value as string);
  };

  const searchFilter = async () => {
    await dispatch(getFilter([value, color]));
    dispatch(increment([-5, 0]));
    localStorage.clear();
  };
  useEffect(() => {
    if (value || color) {
      setDisable(false);
    }
  }, [value, color]);

  return (
    <>
      <Box display="flex" flexDirection="row">
        <Box display="flex" flexDirection="column" height="100%">
          <Box>
            <Filter
              data={data}
              label="Color"
              event={handleChange}
              value={color}
            />
          </Box>
        </Box>
      </Box>
      <Box width="90%" sx={{ margin: "9% 5%" }}>
        <Button
          variant="contained"
          onClick={searchFilter}
          sx={{ width: "100%" }}
          disabled={disable}
        >
          Buscar
        </Button>
      </Box>
    </>
  );
};
