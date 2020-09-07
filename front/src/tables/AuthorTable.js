import React from "react";
import { useHistory } from "react-router-dom";
import { Table } from 'react-bootstrap';
import { faEye, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AuthorTable(props) {
  const history = useHistory();

  const openView = (_id, e) => {
    history.push("/Author/View/" + _id);
  };

  const openEdit = (_id, e) => {
    history.push("/Author/Edit/" + _id);
  };

  return (
    <>
      <div className="container">
        <div className="table-wrapper">
          <div className="table-title px-3 py-3">
            <div className="row">
              <div className="col-md-6 col-12">
                <h4 className="mb-0 mt-1">Manage <b>Authors</b></h4>
              </div>
              <div className="col-md-6 col-12 text-md-right text-left">
                <button onClick={() => history.push("/Author/Add")} className="btn btn-success" >Add Author</button>
              </div>
            </div>
          </div>

          <Table className="table table-striped">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {props.authorList.length > 0 ? (
                props.authorList.map((aut) => (
                  <tr key={aut._id}>
                    <td>
                      {aut.firstName}
                    </td>
                    <td>
                      {aut.lastName}
                    </td>

                    <td>
                      <FontAwesomeIcon icon={faEye} onClick={(e) => openView(aut._id, e)} className="linkCustomView cursorPointer decoration" />
                      <FontAwesomeIcon icon={faPen} onClick={(e) => openEdit(aut._id, e)} className="linkCustomEdit cursorPointer decoration ml-3" />
                    </td>
                  </tr>
                ))
              ) : (
                  <tr>
                    <td colSpan={3} className="text-center">No author available</td>
                  </tr>
                )}
            </tbody>
          </Table>
        </div>
      </div>

    </>
  );
}

export default AuthorTable;
