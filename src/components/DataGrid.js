import { Stack, Divider, styled } from "@mui/material";
import {
  DataGrid,
  GridToolbarExport,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import NoRowIcon from "./NoRowIcon";
import CustomPagination from "./Pagination";

function DataGridTableCustom({
  rows,
  columns,
  isToolbarAvailable = true,
  sx,
  getRowId,
  onCellEditCommit,
  hideFooter,
  components,
  checkboxSelection,
  actionbutton,
}) {
  function CustomToolbar() {
    return (
      <Stack justifyContent="space-between" direction="row" sx={{ m: 1 }}>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={4}
        >
          {isToolbarAvailable && (
            <>
              <GridToolbarQuickFilter />
              <GridToolbarFilterButton />
              <GridToolbarExport />
            </>
          )}
        </Stack>
        {actionbutton}
      </Stack>
    );
  }
  return (
    <StyledDataGrid
      disableColumnMenu
      density="compact"
      showCellRightBorder={true}
      showColumnRightBorder={true}
      showQuickFilter
      sx={{
        minHeight: 450,
        Width: "100%",
        "& .MuiDataGrid-cell:hover": {
          color: "primary.main",
        },
        "& .MuiDataGrid-columnHeader": {
          color: "white",
          bgcolor: "primary.main",
          fontSize: "0.9rem",
          borderRadius: 0,
        },
        "& .MuiDataGrid-row": {
          fontSize: "0.9rem",
          "&:nth-of-type(2n)": {
            backgroundColor: "#f2f2f2",
            "&:hover": {
              background: " #EBF0F4 !important",
            },
          },
        },
        ...sx,
      }}
      components={{
        NoRowsOverlay: NoRowIcon,
        Pagination: CustomPagination,
        Toolbar: CustomToolbar,
        ...components,
      }}
      componentsProps={{
        toolbar: {
          showQuickFilter: true,
          quickFilterProps: { debounceMs: 100 },
        },
      }}
      checkboxSelection={checkboxSelection}
      headerHeight={55}
      disableSelectionOnClick
      disableColumnSelector
      rows={rows}
      columns={columns}
      getRowId={getRowId}
      onCellEditCommit={onCellEditCommit}
      hideFooter={hideFooter}
      pageSize={10}
    />
  );
}

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,
  color:
    theme.palette.mode === "light"
      ? "rgba(0,0,0,.85)"
      : "rgba(255,255,255,0.85)",

  WebkitFontSmoothing: "auto",
  letterSpacing: "normal",
  "& .MuiDataGrid-columnsContainer": {
    backgroundColor: theme.palette.mode === "light" ? "#fafafa" : "#1d1d1d",
  },
  "& .MuiDataGrid-iconSeparator": {
    display: "none",
  },
  "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
    borderRight: `1px solid ${
      theme.palette.mode === "light" ? "#f0f0f0" : "#303030"
    }`,
  },
  "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
    borderBottom: `1px solid ${
      theme.palette.mode === "light" ? "#f0f0f0" : "#303030"
    }`,
  },
  "& .MuiDataGrid-cell": {
    color:
      theme.palette.mode === "light"
        ? "rgba(0,0,0,.85)"
        : "rgba(255,255,255,0.65)",
  },
  "& .MuiPaginationItem-root": {
    borderRadius: 0,
  },
  ...customCheckbox(theme),
}));

function customCheckbox(theme) {
  return {
    "& .MuiCheckbox-root svg": {
      width: 16,
      height: 16,
      backgroundColor: "transparent",
      border: `1px solid ${
        theme.palette.mode === "light" ? "#d9d9d9" : "rgb(67, 67, 67)"
      }`,
      borderRadius: 2,
    },
    "& .MuiCheckbox-root svg path": {
      display: "none",
    },
    "& .MuiCheckbox-root.Mui-checked:not(.MuiCheckbox-indeterminate) svg": {
      backgroundColor: "#1890ff",
      borderColor: "#1890ff",
    },
    "& .MuiCheckbox-root.Mui-checked .MuiIconButton-label:after": {
      position: "absolute",
      display: "table",
      border: "2px solid #fff",
      borderTop: 0,
      borderLeft: 0,
      transform: "rotate(45deg) translate(-50%,-50%)",
      opacity: 1,
      transition: "all .2s cubic-bezier(.12,.4,.29,1.46) .1s",
      content: '""',
      top: "50%",
      left: "39%",
      width: 5.71428571,
      height: 9.14285714,
    },
    "& .MuiCheckbox-root.MuiCheckbox-indeterminate .MuiIconButton-label:after":
      {
        width: 8,
        height: 8,
        backgroundColor: "#1890ff",
        transform: "none",
        top: "39%",
        border: 0,
      },
  };
}

export default DataGridTableCustom;
