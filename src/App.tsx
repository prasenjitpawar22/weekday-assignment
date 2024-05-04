import "./App.css";
import { Container, Grid } from "@mui/material";
import FilterJobs from "./components/filter-jobs-box";
import { useEffect, useRef, useState } from "react";
import JobCards from "./components/job-cards";
import { Job } from "./types";

function App() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState<number>(0);
  const loaderRef = useRef(null);
  const [roles, setRoles] = useState<string[]>([]);
  const [noOfEmp, setNoOfEmp] = useState<string[]>([]);
  const [exp, setExp] = useState<number[]>([]);
  const [mode, setMode] = useState<string[]>([]);
  const [salary, setSalary] = useState<number[]>([]);
  const [company, setCompany] = useState<string>("");
  const [filterJobs, setFilterJobs] = useState<Job[]>([]);

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

      const response = await fetch(
        `https://api.weekday.technology/adhoc/getSampleJdJSON`,
        {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify({ limit: 10, offset }),
        }
      );

      const data = await response.json();
      if (data.jdList) {
        setJobs((prev) => [...prev, ...(data.jdList as Job[])]);
        setOffset(offset + 10);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    handleJobFilter();
    console.log(noOfEmp, exp, company, salary, mode, roles);
  }, [noOfEmp, exp, company, salary, mode, roles]);

  useEffect(() => {
    console.log(filterJobs);
  }, [filterJobs]);

  useEffect(() => {
    handleJobFilter();
  }, [jobs]);

  function handleJobFilter() {
    let updateJobsList = jobs.filter((job) => {
      // exp
      if (exp.length && job.maxExp) {
        const maxExp = Math.max(...exp);
        if (job.maxExp > maxExp) return false;
      }

      // salary
      if (salary.length && job.maxJdSalary) {
        let maxS = Math.max(...salary);
        if (job.maxJdSalary < maxS) return false;
      }

      // mode
      if (mode.length && job.location) {
        if (mode.includes("Hybrid") && job.location !== "Hybrid") return false;
        if (mode.includes("Remote") && job.location !== "Remote") return false;
      }

      // no of emp

      // role
      if (roles.length && job.jobRole) {
        if (!roles.includes(job.jobRole.toLowerCase())) return false;
      }

      // comp.
      if (company.length && job.companyName) {
        if (company.toLowerCase() !== job.companyName.toLowerCase())
          return false;
      }
      return true;
    });
    setFilterJobs(updateJobsList);
  }

  return (
    <Container>
      <Grid sx={{ my: 2 }}>
        <FilterJobs
          setCompany={setCompany}
          setExp={setExp}
          setMode={setMode}
          setNoOfEmp={setNoOfEmp}
          setRoles={setRoles}
          setSalary={setSalary}
        />
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
        <JobCards jobs={filterJobs} />
      </Grid>
      <div ref={loaderRef}>{loading && "Loading..."}</div>
    </Container>
  );
}

export default App;
