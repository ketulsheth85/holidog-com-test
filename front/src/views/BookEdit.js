import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Form, Col, Button } from 'react-bootstrap';
import config from "../environment/config";

export default function BookEdit() {
  const initialState = { name: "", isbn: "", authorId: "" };
  const [addEditBook, setAddEditBook] = useState(initialState);
  const [authorList, setAuthorList] = useState([]);
  const history = useHistory();
  const { id } = useParams();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log("name", name, value);
    setAddEditBook({ ...addEditBook, [name]: value });
  };

  useEffect(() => {
    if (id) {
      axios.get(config.apiUrl + `book/${id}`).then((res) => {
        var data = res.data.data;
        console.log(data);
        setAddEditBook({ name: data.name, isbn: data.isbn, authorId: data.author._id });
      });
    }
    axios.get(config.apiUrl + "author/list").then((res) => setAuthorList(res.data.data.author));
  }, [id]);

  return (
    <div className="container">
      <h5 className="mb-4 mt-4">{id ? "Edit" : "Add"} Book</h5>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (id) {
            axios
              .put(config.apiUrl + "book/update", { name: addEditBook.name, isbn: addEditBook.isbn, authorId: addEditBook.authorId, bookId: id })
              .then((res) => console.log(res.data.msg));
          } else {
            axios.post(config.apiUrl + "book/save", { name: addEditBook.name, isbn: addEditBook.isbn, authorId: addEditBook.authorId }).then((res) => console.log(res.data.msg));
          }
          setAddEditBook(initialState);
          history.push("/Book");
        }}
      >
        <Form.Row>
          <Form.Group as={Col} controlId="formGridBookName">
            <Form.Label>Book Name</Form.Label>
            <Form.Control type="text" placeholder="Enter book name" name="name" value={addEditBook.name} onChange={handleInputChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridISBN">
            <Form.Label>ISBN</Form.Label>
            <Form.Control type="text" placeholder="Enter ISBN" name="isbn" value={addEditBook.isbn} onChange={handleInputChange} />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridAuthor">
            <Form.Label>Author</Form.Label>
            <Form.Control as="select" name="authorId" value={addEditBook.authorId} onChange={handleInputChange}>
              <option value="">Please select author</option>
              {authorList.length > 0 ? (
                authorList.map((author) => (
                  <option value={author._id} key={author._id}>
                    {author.firstName} {author.lastName}
                  </option>
                ))
              ) : (
                  <option value="">No record</option>
                )}
            </Form.Control>
          </Form.Group>

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
