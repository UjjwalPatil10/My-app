import React, { Fragment } from "react";
import { FaPlaneArrival, FaPlaneDeparture, FaChild } from "react-icons/fa";
import { GiPerson } from "react-icons/gi";
import { useForm } from "react-hook-form";
const FlightBookForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert("Ready to Submit", data);
  };
  return (
    <Fragment>
      <section className="container h-100">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white mt-4">
            {/* header section  */}
            <div className="h-24  justify-content-center align-items-center shadow">
              <h3 className="uppercase font-bold  text-center">
                Flight Booking
              </h3>
            </div>

            {/* body section  */}
            <div>
              <div className="d-flex justify-content-evenly space-x-8 mt-5">
                <div className="d-flex align-items-center space-x-2 ">
                  <input
                    type="radio"
                    className="w-6 h-6"
                    name="Program Applied For"
                  />
                  <h5 className="ms-2">Round Trip</h5>
                </div>
                <div className="d-flex align-items-center space-x-2 ">
                  <input
                    type="radio"
                    className="w-6 h-6"
                    name="Program Applied For"
                  />
                  <h5 className="ms-2">Round Trip</h5>
                </div>

                <div className="d-flex align-items-center space-x-2 ">
                  <input
                    type="radio"
                    className="w-6 h-6"
                    name="Program Applied For"
                  />
                  <h5 className="ms-2">Round Trip</h5>
                </div>
              </div>
            </div>

            {/* departure  */}
            <section className="flex-column d-flex text-center">
              <div>
                <div>
                  <div className="relative mt-3">
                    <div className="">
                      <h5
                        style={{ position: "relative" }}
                        className=" text-uppercase font-bold"
                      >
                        flying from
                      </h5>
                    </div>
                    <select className="w-50 rounded-lg text-2xl pl-20">
                      <option>Cirporthatrapati Shivaji terminals A</option>
                      <option>Nagpur Airport</option>
                      <option>Dhule Airport</option>
                      <option>Chennai Airport</option>
                      <option>Banglore Airport</option>
                    </select>
                  </div>
                  <FaPlaneDeparture className="text-4xl absolute left-5 top-10" />
                </div>
              </div>
              {/* arrival section  */}
              <div>
                <div>
                  <div className="relative">
                    <h5 className="text-uppercase font-bold">flying to</h5>
                    <select className="w-50 h-20 rounded-lg text-2xl pl-20">
                      <option>Cirporthatrapati Shivaji terminals A</option>
                      <option>Nagpur Airport</option>
                      <option>Dhule Airport</option>
                      <option>Chennai Airport</option>
                      <option>Banglore Airport</option>
                    </select>
                  </div>
                  <FaPlaneDeparture className="text-4xl absolute left-5 top-10" />
                </div>
              </div>
            </section>
            {/* date section  */}
            <div className="mt-3 d-flex space-x-2 justify-content-evenly">
              {/* departure section  */}
              <div>
                <div>
                  <div className="relative">
                    <h6 className="text-uppercase font-bold">departure date</h6>
                    <input type="date" className=" h-16 rounded-lg text-2xl" />
                    {/* <select className="w-50 h-20 rounded-lg text-2xl pl-20">
                      <option>--Select Airport-</option>
                    </select> */}
                  </div>
                </div>
              </div>

              {/* arrival section  */}
              <div>
                <div>
                  <div className="relative">
                    <h6 className="text-uppercase font-bold">Return Date</h6>
                    <input type="date" className=" h-16 rounded-lg text-2xl" />
                  </div>
                </div>
              </div>
            </div>

            {/* passenger section */}
            <div className="d-flex justify-content-evenly mt-3">
              {/* adult section  */}
              <div>
                <div>
                  <div className="relative">
                    <h6 className="text-uppercase font-bold">ADULTS(18+)</h6>

                    <select className="w-50 h-20 rounded-lg text-2xl pl-20">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                    <GiPerson />
                  </div>
                </div>
              </div>

              {/* children section  */}
              <div>
                <div>
                  <div className="relative">
                    <h6 className="text-uppercase font-bold">CHILDREN(0-17)</h6>

                    <select className="w-100 h-20 rounded-lg text-2xl pl-20">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                    <FaChild />
                  </div>
                </div>
              </div>
            </div>

            {/* class and price section  */}
            <div className="d-flex justify-content-evenly">
              {/* class section  */}
              <div>
                <div>
                  <div className="relative">
                    <h6 className="text-uppercase font-bold">class</h6>

                    <select className="w-100 h-20 rounded-lg text-2xl pl-20">
                      <option>All Prices</option>
                      <option>1000 Rs</option>
                      <option>2000 Rs</option>
                      <option>3000 Rs</option>
                      <option>4000 Rs</option>
                      <option>5000 Rs</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* price section  */}
              <div>
                <div>
                  <div className="relative">
                    <h6 className="text-uppercase font-bold">price</h6>

                    <select className="w-100 h-20 rounded-lg text-2xl pl-20">
                      <option>Economy</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* btn section  */}
            <div className="text-center mt-4">
              <input
                type="submit"
                value="Find Flight"
                className="w-50 font-bold bg-info"
              />
            </div>
          </div>
        </form>
      </section>
    </Fragment>
  );
};

export default FlightBookForm;
