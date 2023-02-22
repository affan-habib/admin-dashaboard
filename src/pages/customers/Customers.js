import React, { useEffect, useMemo } from "react";
import { Box, Button, Stack, Paper } from "@mui/material";
import DataGrid from "../../components/DataGrid";
import Dialog from "../../components/Dialog";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";
import AddCustomer from "./AddCustomer";
import DeleteCustomer from "./DeleteCustomer";
import EditCustomer from "./EditCustomer";

const Customers = () => {
  const dispatch = useDispatch();
  const {
    loading,
    customers = {
      data: [],
    },
    customerDeleted = {
      data: { id: null },
    },
    customerSaved,
  } = useSelector(selectApi);
  useEffect(
    () =>
      dispatch(
        callApi({
          operationId: `api/customers`,
          output: "customers",
        })
      ),

    [customerDeleted.data.id, customerSaved]
  );
  const columns = useMemo(() => [
    {
      field: "id",
      headerName: "CODE",
      width: 70,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "name",
      headerName: "CLIENT NAME",
      flex: 1,
      headerAlign: "left",
      editable: true,
    },
    {
      field: "age",
      headerName: "AGE",
      type: "number",
      minWidth: 60,
      headerAlign: "center",
      align: "center",
      editable: true,
    },
    {
      field: "contactNumber",
      headerName: "CONTACT",
      minWidth: 120,
      headerAlign: "center",
      align: "left",
      editable: true,
    },
    {
      field: "address",
      headerName: "ADDRESS",
      flex: 0.5,
      headerAlign: "left",
      editable: true,
    },
    {
      field: "gender",
      headerName: "GENDER",
      minWidth: 120,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Box
          sx={{
            m: 1,
            px: 1,
            bgcolor: params.value == "MALE" ? "primary.main" : "secondary.main",
            color: "white",
            borderRadius: 5,
            fontSize: 14,
          }}
        >
          {params.value.toUpperCase()}
        </Box>
      ),
    },

    {
      minWidth: 120,
      align: "center",
      field: "actions",
      headerName: "ACTION",
      type: "actions",
      renderCell: (params) => (
        <Stack direction="row">
          <EditCustomer shouldUpdate={params.row} />
          <DeleteCustomer shouldDelete={params.id} />
        </Stack>
      ),
    },
  ]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const ActionButton = () => {
    return (
      <Stack direction="row">
        <Button variant="outlined" onClick={() => setOpen(true)}>
          NEW CUSTOMER
        </Button>
        <Dialog
          title=" NEW CUSTOMER"
          handleOpen={handleOpen}
          handleClose={handleClose}
          open={open}
        >
          <AddCustomer />
        </Dialog>
      </Stack>
    );
  };

  return (
    <Paper elevation={1}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={customers.data}
        columns={columns}
        pageSize={10}
        actionbutton={<ActionButton />}
      />
    </Paper>
  );
};

export default Customers;
