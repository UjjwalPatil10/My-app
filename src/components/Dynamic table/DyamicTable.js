import React, { useReducer, useState } from "react";

const DynamicTable = () => {
  const [state, setState] = useState({});
  const handleChange = (e) => {
    const { value } = e.target;
    setState({ ...state, value });
  };
  const handleChange2 = (e) => {
    const { value, name } = e.target;
    setState({ ...state, value });
  };
  const handleChange3 = (e) => {
    const { value, name } = e.target;
    setState({ ...state, value });
  };

  return (
    <>
      <table>
        <tr>
          <th>
            <td>Roll No</td>
            <td>id</td>
          </th>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tr>
        {state.value}
      </table>
      <h2>Student Data</h2>
      <form>
        Roll no:{" "}
        <input
          type="text"
          name="user"
          // value={state.value}
          onChange={handleChange}
        />
        <h2>{state.value}</h2>
        <br />
        Name:{" "}
        <input
          name="tel"
          // value={state.value}
          onChange={handleChange2}
        />
        <h2>{state.value}</h2>
      </form>

      {/* <h2>{state.value}</h2> */}
    </>
  );
};

export default DynamicTable;
