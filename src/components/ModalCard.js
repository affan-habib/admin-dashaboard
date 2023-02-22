import * as React from "react";
import { Button, Paper, Typography } from "@mui/material";
import Dialog from "./Dialog";
import Loader from "./Loader";
export default function ModalCard({ label, icon, children, title }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Paper
        component={Button}
        onClick={handleOpen}
        disableRipple
        sx={{
          backgroundColor: "white",
          color: "primary.main",
          "&:hover": {
            backgroundColor: "primary.main",
            color: "white",
          },
          cursor: "pointer",
          width: 200,
          height: 90,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
        <Typography
          variant="p"
          fontWeight={600}
          sx={{
            mt: 1,
          }}
        >
          {label}
        </Typography>
      </Paper>
      {open && (
        <React.Suspense fallback={<Loader />}>
          <Dialog
            title={title}
            handleOpen={handleOpen}
            handleClose={handleClose}
            open={open}
          >
            {children}
          </Dialog>
        </React.Suspense>
      )}
    </>
  );
}
