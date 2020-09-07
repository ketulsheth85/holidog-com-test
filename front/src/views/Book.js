import React, { useState, useEffect } from "react";
import BookTable from "../tables/BookTable";
import axios from "axios";

const Book = (props) => {
  const BookData = [];
  const [bookList, setBookList] = useState(BookData);

  useEffect(() => {
    console.log(1);
    axios.get("http://192.168.1.123:3000/api/book/list").then((res) => {
      console.log(2);
      setBookList(res.data.data.book);
    });
  }, []);

  return (
    <div>
      <BookTable bookList={bookList} />
    </div>
  );
};

export default Book;
