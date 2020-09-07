import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Form, Col, Button } from 'react-bootstrap';
import config from "../environment/config";

export default function AuthorEdit() {
  const initialState = { firstName: "", lastName: "" };
  const [addEditAuthor, setAddEditAuthor] = useState(initialState);
  const history = useHistory();
  const { id } = useParams();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log("name", name, value);
    setAddEditAuthor({ ...addEditAuthor, [name]: value });
  };

  useEffect(() => {
    if (id) {
      axios.get(config.apiUrl + `author/${id}`).then((res) => {
        var data = res.data.data;
        console.log(data);
        setAddEditAuthor({ firstName: data.firstName, lastName: data.lastName });
      });
    }
  }, [id]);

  return (
    <div className="container">
      <h5 className="mb-4 mt-4">{id ? "Edit" : "Add"} Author</h5>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (id) {
            axios
              .put(config.apiUrl + "author/update", { firstName: addEditAuthor.firstName, lastName: addEditAuthor.lastName, authorId: id })
              .then((res) => console.log(res.data.msg));
          } else {
            axios.post(config.apiUrl + "author/save", { firstName: addEditAuthor.firstName, lastName: addEditAuthor.lastName }).then((res) => console.log(res.data.msg));
          }
          setAddEditAuthor(initialState);
          history.push("/Author");
        }}
      >
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" name="firstName" value={addEditAuthor.firstName} onChange={handleInputChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" name="lastName" value={addEditAuthor.lastName} onChange={handleInputChange} />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} className="pt-4 text-center">
            <Button variant="success" type="submit" className="mt-2 customSizeButton">
              {id ? "Update" : "Add"}
            </Button>
          </Form.Group>
        </Form.Row>

      </form>
    </div>
  );
}
