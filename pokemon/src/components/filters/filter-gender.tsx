import { Box } from "@mui/system";
import React, { useState } from "react";
import { getAllColor } from "../../store/slice/color-all-slice";
import {
  getAllGender,
  selectAllGender,
} from "../../store/slice/gender-all-slice";
import { useAppSelector } from "../../store/store";
import Filter from "./filter";
import { FilterColor } from "./filter-color";

export const FilterGender = () => {
  const { data, error } = useAppSelector(selectAllGender);
  const [gender, setGender] = useState("");

  const handleChange = async (event: any) => {
    setGender(event.target.value as string);
  };

  return (
    <Box display="flex" flexDirection="row">
      <Box display="flex" flexDirection="column" height="100%">
        <Box>
          <Filter
            data={data}
            label="Genero"
            event={handleChange}
            value={gender}
          />
        </Box>
        <Box>
          <FilterColor value={gender} />
        </Box>
      </Box>
    </Box>
  );
};
