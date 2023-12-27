import React, { useState } from "react";
import useCounter from "./useCounter";

const Customers = () => {
  const [customerList, checkIn, checkOut] = useCounter(0);
  // const[customerList,setCustomerList]=useState(0)
  // const checkIn = ()=>{
  //     setCustomerList(customerList+1)
  // }
  // const checkOut = ()=>{
  //     setCustomerList(customerList-1)
  // }
  return (
    <>
      <h2>Hotel has {customerList} checked in Customers</h2>
      <button onClick={() => checkIn(3)}>Check In</button>
      <button onClick={checkOut}>Check Out</button>
    </>
  );
};

export default Customers;
