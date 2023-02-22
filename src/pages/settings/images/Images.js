import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Button, Grid, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../../reducers/apiSlice";

export default function Images() {
  const dispatch = useDispatch();
  const { loading, images } = useSelector(selectApi);
  React.useEffect(
    () =>
      dispatch(
        callApi({
          operationId: `api/images`,
          output: "images",
        })
      ),
    []
  );
  return (
    <Grid container sx={{ minWidth: 800, minHeight: 600 }}>
      {images?.map((item, index) => (
        <Grid item md={2} sx={{ border: 1, m: 1 }} key={index}>
          <img style={{ width: "100%", height: "auto" }} src={item} />

          <Button
            variant="contained"
            onClick={() => navigator.clipboard.writeText(item)}
          >
            Copy Link
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}
