import "./App.css";
import { Container, Grid } from "@mui/material";
import FilterJobs from "./components/filter-jobs-box";
import { useEffect, useRef, useState } from "react";
import JobCards from "./components/job-cards";
import { Job } from "./types";

function App() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const loaderRef = useRef(null);

  const handleObserver = async (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting && !loading) {
      await getJobs();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "20px", // Optional margin to trigger intersection
      threshold: 1.0, // Trigger when fully in viewport
    });
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, []); // Set up IntersectionObserver when component mounts

  async function getJobs() {
    try {
      setLoading(true);

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const raw = JSON.stringify({ limit: 10, offset: offset });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };
      const response = await fetch(
        `https://api.weekday.technology/adhoc/getSampleJdJSON`,
        requestOptions
      );

      const data = await response.json();
      if (data.jdList) {
        setJobs((prev) => [...prev, ...(data.jdList as Job[])]);
        setOffset((prev) => prev + 10);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  // useEffect(() => {
  //   (async () => {
  //     await getJobs();
  //   })();
  // }, []);

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
          alignItems: "start",
        }}
      >
        <JobCards jobs={jobs} />
      </Grid>
      <div ref={loaderRef}>{loading && "Loading..."}</div>
    </Container>
  );
}

export default App;
