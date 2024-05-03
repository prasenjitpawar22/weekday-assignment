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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            px: 3,
            py: 2,
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>Company Name</Typography>
            <Typography>Position Name</Typography>
            <Typography>Location | experience</Typography>
            <Typography>SALARY</Typography>
          </Box>
          <Box>
            DETAULS Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Eligendi tempore sequi cumque, vero sunt repudiandae eaque
            asperiores aspernatur dicta itaque blanditiis voluptas aliquid, vel
            architecto officia amet qui. Dolor, excepturi?
          </Box>
          <Box>Minimum Experice</Box>
          <Button variant="contained">Easy Apply</Button>
        </Card>
      ))}
    </>
  );
}
