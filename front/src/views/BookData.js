import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Table } from 'react-bootstrap';

export default function BookData() {
  const { id } = useParams();
  const [bookList, setBookList] = useState({ id: "", name: "", isbn: "", author: "" });

  useEffect(() => {
    axios.get(`http://192.168.1.123:3000/api/book/${id}`).then((res) => {
      var data = res.data.data;
      setBookList({ id: data._id, name: data.name, isbn: data.isbn, author: data.author.firstName + " " + data.author.lastName });
    });
  }, [id]);

  return (
    <div>
      <div className="container">
        <Table className="table table-striped table-bordered">
          <tbody>
            <tr>
              <th className="w-50">Name: </th>
              <td className="w-50">{bookList.name}</td>
            </tr>
            <tr>
              <th className="w-50">ISBN:- </th>
              <td className="w-50">{bookList.isbn}</td>
            </tr>
            <tr>
              <th className="w-50">Author: </th>
              <td className="w-50">{bookList.author}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
