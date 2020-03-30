import React from "react";
import { connect } from "react-redux";
//import { Spinner } from "react-bootstrap";

const LoadingSpinner = props => {
  console.log("loading ...");
  return (
    <>
      <div className="preloader" hidden={!props.isHttpRequestLoading}>
        {/* <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner> */}
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>wait please...</div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    isHttpRequestLoading: state.requestLoader.isHttpRequestLoading
  };
};
export default connect(mapStateToProps, null)(LoadingSpinner);
