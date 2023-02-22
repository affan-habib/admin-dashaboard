import { Assessment, Business, Menu, TrackChanges } from "@mui/icons-material";
import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import ModalCard from "../../components/ModalCard";

const Home = () => {
  return (
    <Paper sx={{ p: 2 }}>
      <Stack spacing={2} direction="row">
        {cardData.map((el) => (
          <ModalCard label={el.label} icon={el.icon} />
        ))}
      </Stack>
    </Paper>
  );
};

const cardData = [
  { label: "DASHBOARD", icon: <Assessment /> },
  { label: "GOAL", icon: <Business /> },
  { label: "BUSINESS", icon: <Menu /> },
  { label: "STEPS", icon: <TrackChanges /> },
];

export default Home;
