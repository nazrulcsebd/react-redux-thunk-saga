import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { requestUser } from "../../store/actions/userAction";
import { Table } from "react-bootstrap";

const UserList = props => {
  let state = {
    searchObject: {
      name: "",
      nationId: ""
    },
    modalTitle: "Add Useer",
    isModalOpen: false
  };

  const [searchState, setSearchState] = useState({ ...state });

  useEffect(() => {
    props.requestUser();
  }, []);

  useEffect(() => {
    console.log(props.syncNeeded);
    if (props.syncNeeded) {
      props.requestUser("props.syncNeeded", props.syncNeeded);
    }
  }, [props.syncNeeded]);

  return (
    <>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Nation id</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {props.userList &&
            props.userList.map(usr => {
              return (
                <tr key={`tr${usr.id}`}>
                  <td>{usr.name}</td>
                  <td>{usr.nationId}</td>
                  <td>{usr.address}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

const mapStateToProps = state => {
  return {
    userList: state.userReducher.userList,
    syncNeeded: state.userReducher.syncNeeded,
    gridDataloading: state.userReducher.gridDataloading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestUser: () => {
      dispatch(requestUser());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
