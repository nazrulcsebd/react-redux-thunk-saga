import React from "react";
import { connect } from "react-redux";
import { Form, Button, Card } from "react-bootstrap";
import { loginRequest } from "../../store/actions/authAction";

const Login = props => {
  const credentialSubmit = e => {
    e.preventDefault();
    console.log("login submit", e);
    props.loginRequest({
      loginId: "demo",
      password: "demo"
    });
  };

  return (
    <div style={{ padding: "200px" }}>
      <Card>
        <Card.Header>
          Use account <strong>demo</strong> and password <strong>demo</strong>{" "}
          to continue.
        </Card.Header>
        <Card.Body>
          <Form onSubmit={credentialSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Login id</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter login id"
                value="demo"
              />
              <Form.Text className="text-muted">
                We'll never share your login id with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value="demo"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    loginFailed: state.auth.loginFailed,
    loggingRequest: state.auth.loggingRequest
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginRequest: credential => dispatch(loginRequest(credential))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
