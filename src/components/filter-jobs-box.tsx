import {
  Autocomplete,
  MenuItem,
  TextField,
  Box,
  FormControl,
  Typography,
} from "@mui/material";

import { useState } from "react";

const names = [
  "Humaira Sims",
  "Santiago Solis",
  "Dawid Floyd",
  "Mateo Barlow",
  "Samia Navarro",
  "Kaden Fields",
  "Genevieve Watkins",
  "Mariah Hickman",
  "Rocco Richardson",
  "Harris Glenn",
];

export default function FilterJobs() {
  const [roles, setRoles] = useState<string[]>([]);
  const [noOfEmp, setNoOfEmp] = useState<string[]>();

  return (
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
      <FormControl sx={{}}>
        <Autocomplete
          size="small"
          sx={{ minWidth: 150 }}
          multiple
          options={names}
          getOptionLabel={(option) => option}
          disableCloseOnSelect
          renderInput={(params) => (
            <TextField {...params} variant="outlined" placeholder="Roles" />
          )}
          onChange={(e, v, r) => setRoles(v)}
          renderOption={(props, option) => (
            <MenuItem
              {...props}
              key={option}
              value={option}
              sx={{ display: "inline-flex" }}
            >
              <Typography variant="body2">{option}</Typography>
            </MenuItem>
          )}
        />
      </FormControl>

      <FormControl sx={{}}>
        <Autocomplete
          size="small"
          sx={{ width: 250 }}
          multiple
          options={names}
          getOptionLabel={(option) => option}
          disableCloseOnSelect
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              placeholder="Number Of Employes"
            />
          )}
          onChange={(e, v, r) => setRoles(v)}
          renderOption={(props, option) => (
            <MenuItem
              {...props}
              key={option}
              value={option}
              sx={{ justifyContent: "space-between" }}
            >
              <Typography variant="body2">{option}</Typography>
            </MenuItem>
          )}
        />
      </FormControl>

      <FormControl sx={{}}>
        <Autocomplete
          size="small"
          sx={{ width: 150 }}
          multiple
          options={names}
          getOptionLabel={(option) => option}
          disableCloseOnSelect
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              placeholder="Experience"
            />
          )}
          onChange={(e, v, r) => setRoles(v)}
          renderOption={(props, option) => (
            <MenuItem
              {...props}
              key={option}
              value={option}
              sx={{ justifyContent: "space-between" }}
            >
              <Typography variant="body2">{option}</Typography>
            </MenuItem>
          )}
        />
      </FormControl>

      <FormControl sx={{}}>
        <Autocomplete
          size="small"
          sx={{ width: 120 }}
          multiple
          options={names}
          getOptionLabel={(option) => option}
          disableCloseOnSelect
          renderInput={(params) => (
            <TextField {...params} variant="outlined" placeholder="Remote" />
          )}
          onChange={(e, v, r) => setRoles(v)}
          renderOption={(props, option) => (
            <MenuItem
              {...props}
              key={option}
              value={option}
              sx={{ justifyContent: "space-between" }}
            >
              <Typography variant="body2">{option}</Typography>
            </MenuItem>
          )}
        />
      </FormControl>

      <FormControl sx={{}}>
        <Autocomplete
          size="small"
          sx={{ width: 200 }}
          multiple
          options={names}
          getOptionLabel={(option) => option}
          disableCloseOnSelect
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              placeholder="Minimum Base Salary"
            />
          )}
          onChange={(e, v, r) => setRoles(v)}
          renderOption={(props, option) => (
            <MenuItem
              {...props}
              key={option}
              value={option}
              sx={{ justifyContent: "space-between" }}
            >
              <Typography variant="body2">{option}</Typography>
            </MenuItem>
          )}
        />
      </FormControl>

      <FormControl sx={{}}>
        <Autocomplete
          size="small"
          sx={{ width: 200 }}
          multiple
          options={names}
          getOptionLabel={(option) => option}
          disableCloseOnSelect
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              placeholder="Search Company Name"
            />
          )}
          onChange={(e, v, r) => setRoles(v)}
          renderOption={(props, option) => (
            <MenuItem
              {...props}
              key={option}
              value={option}
              sx={{ justifyContent: "space-between" }}
            >
              <Typography variant="body2">{option}</Typography>
            </MenuItem>
          )}
        />
      </FormControl>
    </Box>
  );
}
