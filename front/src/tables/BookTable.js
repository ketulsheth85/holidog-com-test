import React from "react";
import { useHistory } from "react-router-dom";
import { Table } from 'react-bootstrap';
import { faEye, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BookTable(props) {
  const history = useHistory();

  const openView = (_id, e) => {
    history.push("/Book/View/" + _id);
  };
  return (
    <>
      <div className="container">
        <div className="table-wrapper">
          <div className="table-title px-3 py-3">
            <div className="row">
              <div className="col-md-6 col-12">
                <h4 className="mb-0 mt-1">Manage <b>Books</b></h4>
              </div>
              <div className="col-md-6 col-12 text-md-right text-left">
                <button onClick={() => history.push("/Book/Add")} className="btn btn-success" >Add Book</button>
              </div>
            </div>
          </div>

          <Table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>ISBN</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {props.bookList.length > 0 ? (
                props.bookList.map((book) => (
                  <tr key={book._id}>
                    <td>
                      <span className="linkCustom cursorPointer decoration" onClick={(e) => openView(book._id, e)}>
                        {book.name}
                      </span>
                    </td>
                    <td>
                      {book.isbn}
                    </td>

                    <td>
                      <FontAwesomeIcon icon={faEye} onClick={(e) => openView(book._id, e)} className="linkCustomView cursorPointer decoration" />
                      <FontAwesomeIcon icon={faPen} onClick={() => { history.push("/Book/Edit/" + book._id); }} className="linkCustomEdit cursorPointer decoration ml-3" />
                    </td>
                  </tr>
                ))
              ) : (
                  <tr>
                    <td className="text-center" colSpan={3}>No books available</td>
                  </tr>
                )}
            </tbody>
          </Table>
        </div>
      </div>

    </>
  );
}

export default BookTable;
