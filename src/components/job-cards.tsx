import { Box, Card, Typography, Button } from "@mui/material";
import { Job } from "../types";

interface Props {
  jobs: Job[];
}

export default function JobCards({ jobs }: Props) {
  return (
    <>
      {jobs.map((job, index) => (
        <Card
          key={index}
          variant="elevation"
          sx={{
            width: 250,
            height: 350,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            px: 3,
            py: 2,
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>{job.companyName}</Typography>
            <Typography> {job.jobRole} Position Name</Typography>
            <Typography>
              {job.location} | {job.minExp}-{job.maxExp}
            </Typography>
            <Typography>
              {job.salaryCurrencyCode} {job.minJdSalary} - {job.maxJdSalary}
            </Typography>
          </Box>
          <Box
            sx={{
              maxHeight: 100,
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {job.jobDetailsFromCompany}
            DETAULS Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Eligendi tempore sequi cumque, vero sunt repudiandae eaque
            asperiores aspernatur dicta itaque blanditiis voluptas aliquid, vel
            architecto officia amet qui. Dolor, excepturi?
            <span
              style={{
                width: "100%",
                height: "50px",
                textAlign: "center",
                position: "absolute",
                left: "50%",
                bottom: "-30px",
                color: "#4943da",
                transform: "translate(-50%, -50%)",
                display: "block",
                background: "white",
                maskImage:
                  "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0)), linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))",
                maskPosition: "top top",
              }}
            >
              <span style={{ padding: "2px", background: "white" }}>
                View Job
              </span>
            </span>
          </Box>
          {job.minExp ? (
            <Box>
              Minimum Experice
              {job.minExp}
            </Box>
          ) : null}
          <Button variant="contained">Easy Apply</Button>
        </Card>
      ))}
    </>
  );
}
