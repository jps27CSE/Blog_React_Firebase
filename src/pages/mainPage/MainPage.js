import { useEffect, useState } from "react";
import { Button, Card, CardImg } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase/firebaseconfig";

const MainPage = () => {
  const storage = localStorage.getItem("isAuth");

  const navigate = useNavigate();

  const [postLists, setPostList] = useState([]);
  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    if (!storage) {
      navigate("/login");
    }
  });

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  });

  return postLists.length ? (
    <div className="container">
      {postLists.map((post) => {
        return (
          <div className="row" style={{ marginLeft: "1%" }}>
            <Card style={{ width: "40rem", marginTop: "4%" }}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>

                <Card.Text>{post.content}</Card.Text>
                <Link
                  to={`/article/2`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Button variant="primary">Read More</Button>
                </Link>
                <div style={{ width: "70rem", marginTop: "1%" }}>
                  Author: @ {post.author.name}
                </div>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  ) : (
    <div>Empty</div>
  );
};

export default MainPage;
