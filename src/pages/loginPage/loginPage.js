import { Button, Card } from "react-bootstrap";
import "./loginPage.css";
import { auth, provider } from "../../firebase/firebaseconfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setIsAuth }) => {
  let navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      const storage = localStorage.getItem("isAuth");
      if (storage) {
        navigate("/blog");
      }
      setIsAuth(true);
    });
  };

  return (
    <div className="mainLogin">
      <Card style={{ width: "18rem" }} className="intro-text">
        <Card.Body>
          <Button onClick={signInWithGoogle}>Sign In with Google</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginPage;
