import React, { useState, useEffect } from "react";
import AuthorTable from "../tables/AuthorTable";
import axios from "axios";

const Author = (props) => {
  const authorData = [];
  const [authorList, setAuthorList] = useState(authorData);

  const listData = () => {
    axios.get("http://192.168.1.123:3000/api/author/list").then((res) => setAuthorList(res.data.data.author));
  };

  useEffect(() => {
    listData();
  }, []);

  return (
    <div>
      <AuthorTable authorList={authorList} />
    </div>
  );
};

export default Author;
