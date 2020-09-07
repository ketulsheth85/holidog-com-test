import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Table } from 'react-bootstrap';

export default function AuthorData() {
  const { id } = useParams();
  const authorData = [];
  const [authorList, setAuthorList] = useState(authorData);

  const listData = () => {
    axios.get(`http://192.168.1.123:3000/api/author/${id}`).then((res) => setAuthorList(res.data.data));
  };

  useEffect(() => {
    listData();
  }, []);

  return (
    <div>
      <div className="container">
        <Table className="table table-striped table-bordered">
          <tbody>
            <tr>
              <th className="w-50">First Name: </th>
              <td className="w-50">{authorList.firstName}</td>
            </tr>
            <tr>
              <th className="w-50">Last Name: </th>
              <td className="w-50">{authorList.lastName}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
