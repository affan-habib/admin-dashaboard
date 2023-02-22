import React, { useEffect } from "react";
import { Formik } from "formik";
import {
  Grid,
  Stack,
  TextField,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import { getSchema, validator } from "./Schema";
import { useDispatch } from "react-redux";
import { callApi } from "../../reducers/apiSlice";

const AddCustomer = ({ setOpen }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Formik
        initialValues={getSchema({})}
        enableReinitialize
        validationSchema={validator}
        onSubmit={(values) => {
          dispatch(
            callApi({
              operationId: "api/customers",
              output: "customerSaved",
              parameters: {
                method: "POST",
                body: JSON.stringify(getSchema(values)),
              },
            })
          );
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, handleReset }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item md={4}>
                <Stack spacing={0.5}>
                  <TextField
                    label="Id"
                    id="id"
                    name="id"
                    placeholder="ID"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.id}
                    fullWidth
                  />
                </Stack>
              </Grid>
              <Grid item md={4}>
                <Stack spacing={0.5}>
                  <TextField
                    label="Name"
                    autoFocus={true}
                    id="name"
                    name="name"
                    placeholder="FULL NAME"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    fullWidth
                  />
                </Stack>
              </Grid>
              <Grid item md={2}>
                <Stack spacing={0.5}>
                  <TextField
                    label="Gender"
                    id="gender"
                    name="gender"
                    placeholder="GENDER"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.gender}
                    fullWidth
                  />
                </Stack>
              </Grid>
              <Grid item md={2}>
                <Stack spacing={0.5}>
                  <TextField
                    label="AGe"
                    id="age"
                    name="age"
                    placeholder="AGE"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.age}
                    fullWidth
                    type="number"
                  />
                </Stack>
              </Grid>
              <Grid item md={4}>
                <Stack spacing={0.5}>
                  <TextField
                    label="Contact Number"
                    id="contactNumber"
                    name="contactNumber"
                    placeholder="MOBILE NUMBER"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.contactNumber}
                    fullWidth
                  />
                </Stack>
              </Grid>
              <Grid item md={4}>
                <Stack spacing={0.5}>
                  <TextField
                    label="Address"
                    id="address"
                    name="address"
                    placeholder="MOBILE NUMBER"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                    fullWidth
                  />
                </Stack>
              </Grid>
            </Grid>
            <Divider sx={{ width: "100%", my: 2 }} />
            <Grid item md={12}>
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-end"
                sx={{ height: "100%" }}
              >
                <Button variant="contained" type="submit" sx={{ mr: 1 }}>
                  SAVE
                </Button>
                <Button variant="outlined" type="reset" onClick={handleReset}>
                  RESET
                </Button>
              </Stack>
            </Grid>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddCustomer;
