import React from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
import { Form, Button, Col } from "react-bootstrap";

import { createUser } from "../../store/actions/userAction";

const UserCrud = props => {
  const state = {
    id: undefined,
    name: "",
    nationId: "",
    addess: ""
  };

  const schema = yup.object({
    name: yup.string().required(),
    nationId: yup.string().required(),
    address: yup.string().required()
  });

  const onSubmitForm = (values, { setStatus, setSubmitting, resetForm }) => {
    console.log("onSubmit=> ", values);

    if (values.id !== undefined) {
      //props.updateUser(values);
    } else {
      props.createUser(values);
    }
    resetForm({ ...state });
  };

  return (
    <>
      <Formik
        validationSchema={schema}
        onSubmit={onSubmitForm}
        initialValues={{
          name: "",
          nationId: "",
          address: ""
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="8" controlId="validationFormik03">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="User Name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik04">
                <Form.Label>National identity number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="National identity number"
                  name="nationId"
                  value={values.nationId}
                  onChange={handleChange}
                  isInvalid={!!errors.nationId}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.nationId}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationFormik05">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  isInvalid={!!errors.address}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.address}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Button type="submit">Create User</Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

const mapStateToProps = state => {
  return {
    requestSuccess: state.userReducher.requestSuccess,
    requestFailed: state.userReducher.requestFailed,
    syncNeeded: state.userReducher.syncNeeded
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createUser: user => {
      dispatch(createUser(user));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCrud);
