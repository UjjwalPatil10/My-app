import React from "react";
// We handle errors only in class component not in function component
// Error handler is an error boundary
{
  /* with the help of error boundary we handle the error in the component tree */
}
class ErrorHandler extends React.Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError() {
    //in this methos we pass error and it return object
    return {
      hasError: true, //if error then this method will execute and error update in state
    };
  }
  componentDidCatch(error, info) {
    console.log(error);
  }
  render() {
    //render part will be display in UI
    return this.state.hasError ? ( //ternary operator is used
      <h3>something is wrong</h3>
    ) : (
      this.props.children
    );
  }
}

export default ErrorHandler;
{
  /* <ErrorHandler>   //here ErrorHandler is a Component in that <Comp/> is content so to access that
  componet we use this.props.children
  <Comp/>
</ErrorHandler> */
}
