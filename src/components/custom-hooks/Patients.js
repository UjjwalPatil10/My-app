import React, { useState } from "react";
import useCounter from "./useCounter";

const Patients = () => {
  const [totalPatients, newPatient, dischargePatient] = useCounter(10);
  //     const[totalPatients,setTotalPatients]=useState(0)
  //     const newPatient = ()=>{
  //         setTotalPatients(totalPatients+1)
  //     }

  //     const dischargePatient = ()=>{
  //    if(totalPatients>1)     setTotalPatients(totalPatients-1)
  //     }
  return (
    <>
      <h3>Total {totalPatients} patients are admitted in hospital</h3>
      <button onClick={newPatient}>New Patients</button>
      <button onClick={dischargePatient}>Discharge Patients</button>
    </>
  );
};

export default Patients;
