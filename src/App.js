import React, { Component } from "react";
import { DataGrid } from "@mui/x-data-grid";
import ToggleVehicle from "./components/bike-cardDetails/ToggleVehicle";
import ContextDemo from "./components/context/ContextDemo";
import CustomHooks from "./components/custom-hooks/CustomHooks";
import DynamicTable from "./components/Dynamic table/DyamicTable";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
import FormDemo from "./components/form-demo handling/FormDemo";
// import FormDemo from "./components/form-demo handling/FormDemo";
import FlightBookForm from "./components/formik-demo/FlightBookForm";
import FormikDemo from "./components/formik-demo/FormikDemo";
import HOCDemo from "./components/hoc-demo/HOCDemo";
import Chiku from "./components/hoc-examples/hoc-example2/withCounter";
import HOC from "./components/hoc-examples/hoc-exampl1/HOC";
// import FormikValidation from "./components/formik-demo/FormikValidation";
// import BasicHookForm from "./components/hook-forms/BasicHookForm";
import HookFormDemo from "./components/hook-forms/HookFormDemo";
import HooksDemo from "./components/hooks/HooksDemo";
import FileUploadTask from "./components/image-gallery file input/FileUploadTask";
import ImageGallery from "./components/image-gallery file input/ImageGallery";
import ImageGalleryTask from "./components/image-gallery file input/ImageGalleryTask";
import UploadFileButton from "./components/image-gallery file input/UploadFileButton";
import DevicesGallery from "./components/laptop-mobile Accesseries/DevicesGallery";
import LiftingStateUp from "./components/lifting-state-up/LiftingStateUp";
import CarList from "./components/list-rendering/CarList";
import UserList from "./components/list-rendering/UserList";
import UserListFunc from "./components/list-rendering/UserListFunc";
import DataGridTable from "./components/material-design/DataGridTable";

import MUIDatatableDemo from "./components/material-design/MUIDatatable";
// import UserListFunc from "./components/list-rendering/UserListFunc";
import MethodCalling from "./components/method calling/MethodCalling";
import Olx from "./components/olx Task/Olx";
import Olxes from "./components/olx Task/Olxes";
import PortalDemo from "./components/portal-demo/PortalDemo";
import PureCompDemo from "./components/pure comp demo/PureCompDemo";
import RefsDemo from "./components/refs-demo/RefsDemo";
import RenderProps from "./components/render-props/RenderProps";
import TataHarrierCar from "./components/tata-harrier task/TataHarrierCar";
import TataHarrierTask from "./components/tata-harrier task/TataHarrierTask";
import Demo from "./components/hoc-examples/hoc-exampl1/Demo";
import Display from "./components/hoc-examples/hoc-example2/Display";
import GalleryContent from "./components/olx Task/GalleryContent";
import OlxClassParent from "./components/olx Task/olx folder/OlxClassParent";
import BootstrapDemo from "./components/bootstarp-demo/BootstrapDemo";
// import DynamicTable from "./components/Dynamic table/DyamicTable";
// import MUIDatatableDemo from "./components/material-design/MUIDatatable";
// import DataGridTable from "../src/components/material-design/DataGridTable";
class App extends Component {
  //here we direct use component not React.Component so in named import write { Component } like this
  render() {
    //JSX
    return (
      <div className="app">
        {/* <ImageGalleryTask /> */}
        {/* <BootstrapDemo /> */}
        {/* <OlxClassParent /> */}
        {/* <GalleryContent /> */}
        {/* <Display /> */}
        {/* <Demo /> */}
        {/* <Olxes /> */}
        {/* <Olx /> */}
        {/* <UploadFileButton /> */}
        {/* <ImageGallery /> */}
        {/* <FileUploadTask /> */}
        {/* <ImageGalleryTask /> */}
        {/* <DataGridTable /> */}
        {/* <FormDemo /> */}
        {/* <MUIDatatableDemo /> */}
        {/* <DynamicTable /> */}
        {/* <CarList/> */}
        {/* <UserListFunc /> */}
        {/* <UserList /> */}
        {/* <TataHarrierCar /> */}
        {/* <TataHarrierTask /> */}
        {/* <DevicesGallery /> */}
        {/* <ToggleVehicle /> */}
        {/* <PortalDemo /> */}
        {/* <RenderProps /> */}
        {/* <ImageGallery /> */}
        {/* <CustomHooks /> */}
        {/* <HOCDemo /> */}

        {/* <MethodCalling /> */}
        {/* <RefsDemo /> */}
        {/* <ErrorBoundary /> */}
        {/* <HooksDemo />
         */}
        {/* <PureCompDemo /> */}
        {/* <LiftingStateUp /> */}
        {/* <ContextDemo /> */}

        {/* <FormDemo /> */}
        {/* <FlightBookForm /> */}
        {/* <FormikDemo /> */}
        {/* <FormikValidation /> */}
        <HookFormDemo />
        {/* <BasicHookForm /> */}
        {/* <MUIDatatableDemo /> */}
        {/* <BootstrapDemo /> */}
      </div>
    );
  }
}
export default App;
