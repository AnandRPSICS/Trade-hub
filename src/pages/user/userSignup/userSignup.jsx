import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import cactusImg from "../../../assets/images/cactus.png";
import typingGirlImg from "../../../assets/images/typing-girl-img.png";
import "./userSignup.css";
import UserSignupForm from "./userSignupForm";

const UserSignup = () => {
  return (
    <Container fluid className="user-signup-container center">
      <Row
        fluid="md"
        className="position-relative user-signup-form-box mx-auto"
      >
        <Col xs={9} className="pt-3 ps-4">
          <h3 className="welcome-text poppins-semibold">
            {" "}
            WELCOME TO <span> TRADE HUB</span>{" "}
          </h3>

          <Container style={{ height: "88%" }} fluid className="p-0">
            <UserSignupForm />
          </Container>
        </Col>

        <Col
          xs={3}
          className="user-signup-right-side rounded position-absolute d-flex"
        >
          <div className="d-flex signup-img-container">
            <Image
              className="typing-girl-img"
              src={typingGirlImg}
              alt="cactus"
            />
            <Image className="cactus-img" src={cactusImg} alt="cactus" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserSignup;
