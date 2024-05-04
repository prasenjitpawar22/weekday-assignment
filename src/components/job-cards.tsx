import { Box, Card, Typography, Button, Chip } from "@mui/material";
import { Job } from "../types";

interface Props {
  jobs: Job[];
}

export default function JobCards({ jobs }: Props) {
  return (
    <>
      {jobs.map((job) => (
        <Card
          key={job.jdUid}
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
            <Typography> {job.jobRole} </Typography>
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
                textAlign: "center",
                position: "absolute",
                left: "50%",
                bottom: "-20px",
                color: "#4943da",
                transform: "translate(-50%, -50%)",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
                background: "white",
                opacity: 0.9,
                cursor: "pointer",
              }}
            >
              <Chip sx={{ padding: "2px" }} label={"View Job"} />
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
