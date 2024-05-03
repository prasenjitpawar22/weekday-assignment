import "./App.css";
import { Container, Grid } from "@mui/material";
import FilterJobs from "./components/filter-jobs-box";
import { useEffect, useState } from "react";
import JobCards from "./components/job-cards";
import { Job } from "./types";

function App() {
  const [jobs, setJobs] = useState<Job[]>([]);
  async function getJobs() {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const raw = JSON.stringify({ limit: 10, offset: 0 });

      const requestOptions = { method: "POST", headers: myHeaders };
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );

      const data = await response.json();
      if (data.jdList) {
        setJobs(data.jdList as Job[]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    (async () => {
      await getJobs();
    })();
  }, [getJobs]);

  return (
    <Container>
      <Grid sx={{ my: 2 }}>
        <FilterJobs />
      </Grid>
      <Grid
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <JobCards jobs={jobs} />
      </Grid>
    </Container>
  );
}

export default App;
