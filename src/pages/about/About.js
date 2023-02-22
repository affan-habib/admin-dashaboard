import {
  Box,
  Dialog,
  Divider,
  Grid,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import React, { Suspense, useState } from "react";
import Faq from "./Faq";
import File from "./File";
import Loader from "../../components/Loader";

const Bugs = React.lazy(() => import("./Bugs"));

const About = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
      >
        <Grid item md={6}>
          <Paper sx={{ minHeight: 400 }} square>
            <Typography
              sx={{
                pt: 2,
                ml: 2,
                textTransform: "uppercase",
                color: "primary",
              }}
              variant="h5"
            >
              Frequently Asked Questions
            </Typography>
            <Divider sx={{ mt: 2 }} />
            <Faq />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
