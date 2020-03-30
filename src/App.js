import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/auth/login";
import Dashboard from "./pages/Dashboard";
import LoadingSpinner from "./page-helper/LoadingSpinner";
import { ToastContainer, Slide, toast } from "react-toastify";

const App = props => {
  const { isLoggedIn } = props;
  return (
    //<Suspense fallback={<LoadingSpinner />}>
    <BrowserRouter>
      <>
        {isLoggedIn ? (
          <div>
            <Switch>
              <Route exact={true} path="/dashboard" component={Dashboard} />
              {console.log("after Logged in")}
              <Redirect from="/login" to="/dashboard" />
              <Redirect from="/" to="/dashboard" />
            </Switch>
          </div>
        ) : (
          <div className="App">
            {console.log("Before Logged in")}
            <Switch>
              <Route exact={true} path="/login" component={Login} />
              <Redirect from="/" to="/login" />
            </Switch>
          </div>
        )}
      </>
      <LoadingSpinner />
      <ToastContainer
        transition={Slide}
        draggable={false}
        closeOnClick={false}
        autoClose={5000}
        hideProgressBar={false}
        position={toast.POSITION.TOP_RIGHT}
        pauseOnHover={true}
        progress={0.2}
        newestOnTop={true}
      />
    </BrowserRouter>

    // </Suspense>
  );
};

const mapStateToProps = state => {
  return {
    userName: state.auth.userName,
    isLoggedIn: state.auth.isLoggedIn,
    authToken: state.auth.authToken,
    requestSucceed: state.userReducher.requestSuccess
  };
};

export default connect(mapStateToProps)(App);
