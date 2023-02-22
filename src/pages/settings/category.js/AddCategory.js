import React from "react";
import { Formik } from "formik";
import { FormHelperText, Grid, Stack, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { callApi } from "../../../reducers/apiSlice";

const AddCategory = ({ setOpen }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Formik
        initialValues={{ categoryName: "" }}
        enableReinitialize
        onSubmit={(values) => {
          dispatch(
            callApi({
              operationId: "api/categories",
              output: "itemSaved",
              parameters: {
                method: "POST",
                body: JSON.stringify(values),
              },
            })
          );
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} sx={{ maxWidth: 400 }}>
              <Grid item xs={8} sm={6} md={12}>
                <Stack spacing={0.5}>
                  <TextField
                    label="Category Name"
                    autoFocus={true}
                    id="categoryName"
                    name="categoryName"
                    placeholder="Enter name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.categoryName}
                    fullWidth
                  />
                  {touched.categoryName && errors.categoryName && (
                    <FormHelperText error>{errors.categoryName}</FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  type="reset"
                  onClick={handleReset}
                  sx={{ ml: 1 }}
                >
                  Reset
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddCategory;
