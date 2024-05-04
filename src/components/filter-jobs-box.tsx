import {
  Autocomplete,
  MenuItem,
  TextField,
  Box,
  FormControl,
  Typography,
} from "@mui/material";

const rolesDesc = [
  { role: "software engineer", group: "engineering" },
  { role: "frontend", group: "engineering" },
  { role: "backend", group: "engineering" },
  { role: "full stack ", group: "engineering" },
  { role: "devops engineer", group: "engineering" },
  { role: "ui/ux designer", group: "engineering" },
  { role: "qa engineer", group: "engineering" },
  { role: "technical support engineer", group: "engineering" },
  { role: "machine learning engineer", group: "engineering" },
  { role: "data scientist", group: "engineering" },
  { role: "product manager", group: "management" },
  { role: "project manager", group: "management" },
  { role: "scrum master", group: "management" },
  { role: "operations manager", group: "management" },
];

export const modeDesc = ["Remote", "Hybrid", "In-office"];
export const salaryDesc = [
  { l: "10K", v: 10 },
  { l: "20K", v: 20 },
  { l: "30K", v: 30 },
  { l: "40K", v: 40 },
  { l: "50K", v: 50 },
  { l: "60K", v: 60 },
  { l: "70K", v: 70 },
  { l: "80K", v: 80 },
  { l: "90K", v: 90 },
  { l: "100K", v: 100 },
  { l: "110K", v: 110 },
];
export const expDesc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const noOfEmpDesc = [
  "1-10",
  "11-20",
  "21-50",
  "51-100",
  "101-200",
  "201-500",
  "500+",
];

interface Props {
  setRoles: React.Dispatch<React.SetStateAction<string[]>>;
  setNoOfEmp: React.Dispatch<React.SetStateAction<string[]>>;
  setExp: React.Dispatch<React.SetStateAction<number[]>>;
  setMode: React.Dispatch<React.SetStateAction<string[]>>;
  setSalary: React.Dispatch<React.SetStateAction<number[]>>;
  setCompany: React.Dispatch<React.SetStateAction<string>>;
}

export default function FilterJobs({
  setNoOfEmp,
  setRoles,
  setCompany,
  setExp,
  setMode,
  setSalary,
}: Props) {
  return (
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
      <FormControl sx={{}}>
        <Autocomplete
          size="small"
          sx={{ minWidth: 150 }}
          multiple
          options={rolesDesc}
          getOptionLabel={(option) => option.role}
          groupBy={(option) => option.group}
          disableCloseOnSelect
          renderInput={(params) => (
            <TextField {...params} variant="outlined" placeholder="Roles" />
          )}
          onChange={(e, v, r) => {
            const roles = v.map((_) => _.role);
            setRoles(roles);
          }}
          renderOption={(props, option) => (
            <MenuItem
              {...props}
              key={option.role}
              value={option.role}
              sx={{ display: "inline-flex" }}
            >
              <Typography variant="body2">{option.role}</Typography>
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
          onChange={(e, v, r) => setNoOfEmp(v)}
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

      {/* exp  */}
      <FormControl sx={{}}>
        <Autocomplete
          size="small"
          sx={{ width: 150 }}
          multiple
          options={expDesc}
          getOptionLabel={(option) => option.toString()}
          disableCloseOnSelect
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              placeholder="Experience"
            />
          )}
          onChange={(e, v, r) => setExp(v)}
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

      {/* mode  */}
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
          onChange={(e, v, r) => setMode(v)}
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
          getOptionLabel={(option) => option.l}
          disableCloseOnSelect
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              placeholder="Minimum Base Salary"
            />
          )}
          onChange={(e, v, r) => {
            const s = v.map((_) => _.v);
            setSalary(s);
          }}
          renderOption={(props, option) => (
            <MenuItem
              {...props}
              key={option.l}
              value={option.v}
              sx={{ justifyContent: "space-between" }}
            >
              <Typography variant="body2">{option.l}</Typography>
            </MenuItem>
          )}
        />
      </FormControl>

      <FormControl sx={{}}>
        <TextField
          size="small"
          variant="outlined"
          placeholder="Search Company Name"
          onChange={(e) => setCompany(e.target.value)}
        />
      </FormControl>
    </Box>
  );
}
