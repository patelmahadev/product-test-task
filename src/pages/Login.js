import React, { useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/authSlice";
import { toast } from "react-toastify";

const schema = Yup.object().shape({
  username: Yup.string()
    .required("username required")
    .min(4, "username must be at least 4 characters"),
  password: Yup.string()
    .required("password required")
    .min(4, "password must be at least 4 characters"),
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const res = useSelector((state) => state?.api?.loginData);

  useEffect(() => {
    if (res?.status === 200) {
      toast.success("user login successfully");
      navigate("/browse-home");
    }
  }, [res]);

  return (
    <div>
      <ToastContainer />
      <div className="col-md-6 col-lg-5 mt-5 m-auto">
        <div className="card py-5">
          <Formik
            validationSchema={schema}
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={(values, { resetForm }) => {
              if (
                values.username === "testLogin" &&
                values.password === "t3stP@ssw0rd"
              ) {
                dispatch(loginUser(values));
                resetForm({ values: "" });
              } else {
                toast.error("Invalid username or password");
              }
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <div className="container">
                <Container fluid>
                  <Row>
                    <Col lg={12}>
                      <div>
                        <div>
                          <div>
                            <form
                              className="theme-form"
                              noValidate
                              onSubmit={handleSubmit}
                            >
                              <h4>login Your Account</h4>
                              <div>
                                <Row>
                                  <Col lg={12}>
                                    <div>
                                      <Form.Group>
                                        <Form.Label>username</Form.Label>
                                        <Form.Control
                                          autoComplete="off"
                                          type="text"
                                          name="username"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.username}
                                          placeholder="username"
                                        />
                                      </Form.Group>

                                      <p
                                        className="errors"
                                        style={{ color: "red" }}
                                      >
                                        {errors.username &&
                                          touched.username &&
                                          errors.username}
                                      </p>
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col md={12}>
                                    <div>
                                      <Form.Group>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                          autoComplete="off"
                                          type="password"
                                          placeholder="*********"
                                          name="password"
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.password}
                                        ></Form.Control>
                                        <div>
                                          <span> </span>
                                        </div>
                                      </Form.Group>

                                      <p
                                        className="errors"
                                        style={{ color: "red" }}
                                      >
                                        {errors.password &&
                                          touched.password &&
                                          errors.password}
                                      </p>
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg={12}>
                                    <Button
                                      className="loginbtn"
                                      variant="primary"
                                      type="submit"
                                      value="Submit"
                                    >
                                      Login
                                    </Button>
                                  </Col>
                                </Row>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
