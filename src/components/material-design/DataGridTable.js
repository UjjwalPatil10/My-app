import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const users = [
  {
    // id: 1,
    name: "aaa",
    mobile: "1111",
    email: "aaa@gmail.com",
    city: "Dhule",
  },
  {
    id: 2,
    name: "bbb",
    mobile: "2222",
    email: "bbb@gmail.com",
    city: "Mumbai",
  },
  {
    id: 3,
    name: "ccc",
    mobile: "3333",
    email: "ccc@gmail.com",
    city: "Pune",
  },
  {
    id: 4,
    name: "ddd",
    mobile: "4444",
    email: "ddd@gmail.com",
    city: "Mumbai",
  },
  {
    id: 5,
    name: "eee",
    mobile: "5555",
    email: "eee@gmail.com",
    city: "Pune",
  },
  {
    id: 6,
    name: "fff",
    mobile: "6666",
    email: "fff@gmail.com",
    city: "Mumbai",
  },
];

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: true,
    sortable: true,
  },

  {
    field: "mobile",
    headerName: "Mobile",
    type: "number",
    width: 110,
    editable: false,
  },
  {
    field: "email",
    headerName: "Email",
    width: 110,
    editable: false,
  },
  {
    field: "city",
    headerName: "City",
    width: 110,
    editable: false,

    valueGetter: (params) => `${params.row?.city?.toUpperCase() || "NA"}`,
  },
];

const DataGridTable = () => {
  return (
    <>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          getRowId={(row) => row.name + row.mobile}
          rows={users}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </>
  );
};

export default DataGridTable;
