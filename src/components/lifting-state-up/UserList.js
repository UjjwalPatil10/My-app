import React from "react";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  table: {
    margin: 3,
    border: "1px solid#000",
    borderCollapse: "collapse",
    "& th": {
      border: "1px solid #000",
      padding: "3px 10px",
    },
    "& td": {
      border: "1px solid #000",
      padding: "3px 10px",
    },
  },
});

const UserList = ({ items }) => {
  const classes = useStyles();
  return (
    <>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          {/* we make table data dynamic for that take in {} */}
          {Array.isArray(items) &&
            items.map(
              (
                { name, mobile, email, city },
                i
                //we do object destructuring
              ) => (
                <tr key={mobile + i}>
                  <td>{name}</td>
                  <td>{mobile}</td>
                  <td>{email}</td>
                  <td>{city}</td>
                </tr>
              )
            )}
        </tbody>
      </table>
    </>
  );
};

export default UserList;
