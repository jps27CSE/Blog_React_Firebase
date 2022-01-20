import { useEffect } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import "./landingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const storage = localStorage.getItem("isAuth");
    console.log(storage);

    if (storage) {
      navigate("/blog");
    }
  });

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Dev</h1>
              <div className="buttonContainer">
                <a href="/login">
                  <Button size="lg" className="landingbutton">
                    Login
                  </Button>
                </a>
                <a href="/signup">
                  <Button
                    size="lg"
                    className="landingbutton"
                    variant="outline-primary"
                  >
                    Signup
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default LandingPage;
