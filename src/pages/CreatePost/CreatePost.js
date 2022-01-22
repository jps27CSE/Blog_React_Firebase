import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../firebase/firebaseconfig";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, SetTitle] = useState("");
  const [content, SetContent] = useState("");

  const storage = localStorage.getItem("isAuth");
  const navigate = useNavigate();

  useEffect(() => {
    if (!storage) {
      navigate("/");
    }
  });

  const postCollectionRef = collection(db, "posts"); // first parameter for calling database and second parameter is name of the firestore database collection
  const createPost = async (e) => {
    e.preventDefault();
    await addDoc(postCollectionRef, {
      title: title,
      content: content,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/blog");
  };

  const ResetHandler = (e) => {
    e.preventDefault();

    SetTitle("");
    SetContent("");
  };

  return (
    <div>
      <Card>
        <Card.Header>Create a New Post</Card.Header>
        <Card.Body>
          <Form onSubmit={createPost}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                placeholder="Enter the Title"
                onChange={(event) => {
                  SetTitle(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter the Content"
                value={content}
                rows={4}
                onChange={(event) => {
                  SetContent(event.target.value);
                }}
              />
            </Form.Group>
            <Card>
              {/* <Card.Header>Note Preview</Card.Header> */}
              <Card.Body>{/* <ReactMarkDown></ReactMarkDown> */}</Card.Body>
            </Card>

            {/* <Form.Group controlId="content">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" placeholder="Enter the Category" />
            </Form.Group> */}
            <Button type="submit" variant="primary">
              Create Note
            </Button>
            <Button className="mx-2" variant="danger" onClick={ResetHandler}>
              Reset Fields
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer className="text-muted">
          Creating on - {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CreatePost;
