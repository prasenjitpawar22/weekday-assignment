import {
  Autocomplete,
  MenuItem,
  TextField,
  Box,
  FormControl,
  Typography,
} from "@mui/material";

import { useState } from "react";

const rolesDesc = [
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

const modeDesc = ["Remote", "Hybrid", "In-office"];
const salaryDesc = ["0L", "10L", "20L", "30L", "40L", "50L", "60L", "70L"];
const expDesc = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const noOfEmpDesc = [
  "1-10",
  "11-20",
  "21-50",
  "51-100",
  "101-200",
  "201-500",
  "500+",
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
          options={rolesDesc}
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
          options={noOfEmpDesc}
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
          options={expDesc}
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
          options={modeDesc}
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
          options={salaryDesc}
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
          options={rolesDesc}
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
