import React, { useEffect, useMemo } from "react";
import { Box, Button, Checkbox, Stack } from "@mui/material";
import DataGrid from "../../components/DataGrid";
import { useDispatch, useSelector } from "react-redux";
import { callApi, selectApi } from "../../reducers/apiSlice";
import AddTodo from "./AddTodo";
import DeleteTodo from "./DeleteTodo";
import EditTodo from "./EditTodo";
import Dialog from "../../components/Dialog";
import moment from "moment";
const Todos = () => {
  const dispatch = useDispatch();
  const {
    todos = {
      data: [],
    },
    todoDeleted = {
      data: {
        id: null,
      },
    },
    todoSaved,
  } = useSelector(selectApi);

  useEffect(
    () =>
      dispatch(
        callApi({
          operationId: `api/todos`,
          output: "todos",
        })
      ),
    [todoDeleted.data.id, todoSaved]
  );
  const columns = useMemo(() => [
    {
      headerName: "SERIAL",
      headerAlign: "center",
      width: 80,
      valueGetter: (params) =>
        todos.data.findIndex((el) => el._id == params.id) + 1,
      align: "center",
      sortable: false,
    },
    {
      field: "task",
      headerName: "TASK NAME",
      headerAlign: "left",
      editable: true,
      minWidth: 150,
    },
    {
      field: "details",
      headerName: "DETAILS",
      headerAlign: "left",
      editable: true,
      flex: 1,
    },
    {
      field: "startDate",
      minWidth: 200,
      headerName: "START DATE",
      headerAlign: "left",
      editable: true,
      renderCell: (params) => (
        <>{moment(params.row.startDate).format("DD-MM-YY HH:mm")}</>
      ),
    },
    {
      field: "expectedEndDate",
      minWidth: 200,
      headerName: "EXPECTED END DATE",
      headerAlign: "left",
      editable: true,
      renderCell: (params) => (
        <>{moment(params.row.expectedEndDate).format("DD-MM-YY HH:mm")}</>
      ),
    },
    {
      field: "endDate",
      minWidth: 200,
      headerName: "END DATE",
      headerAlign: "left",
      editable: true,
      renderCell: (params) => (
        <>
          {moment(params.row.startDate).format("DD-MM-YY HH:mm")}
          {console.log(params)}
        </>
      ),
    },
    {
      field: "status",
      headerName: "STATUS",
      align: "center",
      headerAlign: "center",
      editable: true,
      renderCell: (params) => (
        <Box
          sx={{
            bgcolor:
              params.row.status == "pending" ? "primary.main" : "error.main",
            color: "white",
            borderRadius: 10,
            px: 1,
          }}
        >
          {params.row.status.toUpperCase()}
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
          <EditTodo shouldUpdate={params.row} />
          <DeleteTodo shouldDelete={params.id} />
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
          NEW TASK
        </Button>
        <Dialog
          title="NEW TASK"
          handleOpen={handleOpen}
          handleClose={handleClose}
          open={open}
        >
          <AddTodo />
        </Dialog>
      </Stack>
    );
  };
  return (
    <DataGrid
      getRowId={(row) => row._id}
      rows={todos.data}
      columns={columns}
      actionbutton={<ActionButton />}
    />
  );
};

export default Todos;
