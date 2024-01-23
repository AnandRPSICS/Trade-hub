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
        className="border h-75 w-75 rounded d-flex"
      >
        <Container fluid className="w-50 h-100 border">
          <Image className="w-100" src={loginImg} alt="barter" />
        </Container>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="w-50 h-100 border p-3"
        >
          <h2 className="text-center"> Login</h2>

          <Form.Group>
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
          <Row>
            <Col>
                <p> Don't have an account ? <span> Create</span></p>
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
