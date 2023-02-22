import React from "react";
import { Formik } from "formik";
import {
  FormHelperText,
  Grid,
  Stack,
  TextField,
  Button,
  Divider,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { getSchema, validator } from "./Schema";
import { useDispatch } from "react-redux";
import { callApi } from "../../reducers/apiSlice";

const AddTodo = ({ setOpen }) => {
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
              operationId: "api/todos",
              output: "todoSaved",
              parameters: {
                method: "POST",
                body: JSON.stringify(getSchema(values)),
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
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} sx={{ maxWidth: 600 }}>
              <Grid item xs={8} sm={6} md={6}>
                <Stack spacing={0.5}>
                  <TextField
                    label="TASK NAME"
                    autoFocus={true}
                    id="task"
                    name="task"
                    placeholder="Enter Task"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.task}
                    fullWidth
                  />
                  {touched.task && errors.task && (
                    <FormHelperText error>{errors.task}</FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={8} sm={6} md={6}>
                <Stack spacing={0.5}>
                  <TextField
                    label="Details"
                    autoFocus={true}
                    id="details"
                    name="details"
                    placeholder="Enter Details"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.details}
                    fullWidth
                    type="text"
                  />
                  {touched.details && errors.details && (
                    <FormHelperText error>{errors.details}</FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={8} sm={6} md={6}>
                <Stack spacing={0.5}>
                  <TextField
                    id="datetime-local"
                    label="Start Date"
                    type="datetime-local"
                    defaultValue={values.startDate}
                    onChange={(e) => setFieldValue("startDate", e.target.value)}
                  />
                </Stack>
              </Grid>
              <Grid item xs={8} sm={6} md={6}>
                <Stack spacing={0.5}>
                  <TextField
                    id="datetime-local"
                    label="Expected End Date"
                    type="datetime-local"
                    defaultValue={values.expectedEndDate}
                    onChange={(e) =>
                      setFieldValue("expectedEndDate", e.target.value)
                    }
                  />
                </Stack>
              </Grid>
              <Grid item xs={8} sm={6} md={6}>
                <Stack spacing={0.5}>
                  <TextField
                    id="datetime-local"
                    label="End Date"
                    type="datetime-local"
                    defaultValue={values.endDate}
                    onChange={(e) => setFieldValue("endDate", e.target.value)}
                  />
                </Stack>
              </Grid>
              <Grid item xs={8} sm={6} md={6}>
                <Stack spacing={0.5}>
                  <TextField
                    value={values.status}
                    onChange={(e) => setFieldValue("status", e.target.value)}
                    label="Status"
                    variant="filled"
                    select
                  >
                    <MenuItem value="pending">PENDING</MenuItem>
                    <MenuItem value="completed">COMPLETED</MenuItem>
                    <MenuItem value="in progress">IN PROGRESS</MenuItem>
                  </TextField>
                </Stack>
              </Grid>
              <Grid item xs={8} sm={6} md={6}>
                <Stack spacing={0.5}>
                  <FormControlLabel
                    label="Checkbox"
                    control={
                      <Checkbox
                        label="Completed"
                        value=""
                        checked={values.status}
                        onChange={(e) =>
                          setFieldValue("status", !values.status)
                        }
                        color="primary"
                      />
                    }
                  />
                </Stack>
              </Grid>
            </Grid>
            <Divider sx={{ width: "100%", my: 2 }} />
            <Grid item xs={12}>
              <Button variant="contained" type="submit" sx={{ mr: 1 }}>
                Submit
              </Button>
              <Button variant="outlined" color="error" type="reset">
                Reset
              </Button>
            </Grid>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddTodo;
