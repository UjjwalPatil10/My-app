import React from "react";
import MuiDataTable from "mui-datatables";
const users = [
  {
    // id: 1,
    name: "aaa",
    mobile: "1111",
    email: "aaa@gmail.com",
    password: "Pune",
  },
  {
    id: 2,
    name: "bbb",
    mobile: "2222",
    email: "bbb@gmail.com",
    password: "Mumbai",
  },
  {
    id: 3,
    name: "ccc",
    mobile: "3333",
    email: "ccc@gmail.com",
    password: "Pune",
  },
  {
    id: 4,
    name: "ddd",
    mobile: "4444",
    email: "ddd@gmail.com",
    password: "Mumbai",
  },
  {
    id: 5,
    name: "eee",
    mobile: "5555",
    email: "eee@gmail.com",
    password: "Pune",
  },
  {
    id: 6,
    name: "fff",
    mobile: "6666",
    email: "fff@gmail.com",
    password: "Mumbai",
  },
];

const MUIDatatableDemo = ({ data }) => {
  const columns = [
    {
      name: "id", //"id" is propertyName of users data
      label: "ID",
    },
    {
      name: "name", //"name" is propertyName of users data
      label: "Name",
      options: {
        sort: true, //sort is done on unique things like mobile,email,password etc
        filter: false, //filter is done on common values like i user data there is city and some user has common city name for that we use filter
      },
    },
    {
      name: "mobile",
      label: "Mobile",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      name: "email",
      label: "Email",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      name: "password",
      label: "password",
      options: {
        sort: true,
        filter: true,
      },
    },
  ];
  return (
    <>
      <MuiDataTable
        title="Customer List"
        data={data ? data : users} //we use ternary operator
        columns={columns}
      />
    </>
  );
};

export default MUIDatatableDemo;
