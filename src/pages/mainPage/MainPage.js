import { useEffect } from "react";
import { Button, Card, CardImg } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const storage = localStorage.getItem("isAuth");

  const navigate = useNavigate();

  useEffect(() => {
    if (!storage) {
      navigate("/login");
    }
  });

  return (
    <div className="container">
      <div className="row">
        <Card style={{ width: "70rem", marginTop: "1%" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Link
              to={`/article/2`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Button variant="primary">Read More</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div className="row">
        <Card style={{ width: "70rem", marginTop: "1%" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>{" "}
            <Link
              to={`/article/2`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Button variant="primary">Read More</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default MainPage;
