import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export type propSelectFarm = {
  data?: any;
  label?: string;
  value?: string;
  event?: (e: any) => void;
};

export default function Filter({ data, label, value, event }: propSelectFarm) {
  return (
    <Box sx={{ width: 190 }}>
      <FormControl fullWidth sx={{ marginTop: "10%", marginLeft: "5%" }}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          sx={{ marginRight: "10%", fontSize: ".9rem" }}
          labelId="fiter-maps-id"
          id="filter-maps-id"
          value={value}
          label={label}
          onChange={event}
        >
          {data !== undefined &&
            data.map(({ name }: any) => {
              return (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </Box>
  );
}
