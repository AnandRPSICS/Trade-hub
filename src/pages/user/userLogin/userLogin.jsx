import { useState } from "react";
import { Container, Image, Row, Col, Form, Button } from "react-bootstrap";
import loginImg from "../../../assets/images/signup-img.jpg";
import "./userLogin.css";

const UserLogin = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Container id="user-signup-container" fluid className="w-100">
      <Container
        id="signup-form"
        fluid
        className="border ps-0 h-75 w-75 rounded d-flex"
      >
        <Container fluid className="p-0 w-50 h-100 border">
          {/* <Image className="w-100" src={loginImg} alt="barter" /> */}
          <Image
            className="w-100 "
            src="https://img.freepik.com/free-vector/falling-coins-concept-illustration_114360-22888.jpg?w=740&t=st=1706025795~exp=1706026395~hmac=1cd765d8b1e3ff89501d36c1c2940958985d00d20c1020f88cff88844164e8be"
            alt="barter"
          />
        </Container>
        <Form
          noValidatep
          validated={validated}
          onSubmit={handleSubmit}
          className="w-50 h-100 border p-3"
        >
          <h2 className="text-center"> Login</h2>

          <Form.Group className="mt-5">
            <Row>
              <Col xs={3}>
                <Form.Label>Email</Form.Label>
              </Col>
              <Col>
                <Form.Control type="email" placeholder="Email" required />
                <Form.Control.Feedback type="invalid">
                  Please provide email.
                </Form.Control.Feedback>
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mt-3">
            <Row>
              <Col xs={3}>
                <Form.Label>Password</Form.Label>
              </Col>
              <Col>
                <Form.Control type="password" placeholder="Password" required />
                <Form.Control.Feedback type="invalid">
                  Please provide password.
                </Form.Control.Feedback>
              </Col>
            </Row>
          </Form.Group>
          <Row>
            <Col xs={6}></Col>
            <Col>
              <p className="text-end">
                <i>Forgot password?</i>
              </p>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="center">
              <p>
                {" "}
                Don't have an account ?{" "}
                <span className="text-decoration-underline text-primary">
                  {" "}
                  Create an account
                </span>
              </p>
            </Col>
          </Row>
          <Button className="mt-3 mx-auto center" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </Container>
  );
};
export default UserLogin;
