import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import UserLists from "./userLists";
import UserCrud from "./userCrud";

const UserPage = props => {
  const actionState = {
    modalTitle: "Create new user",
    isModalOpen: false
  };

  const [searchState, setSearchState] = useState({ ...actionState });

  const toggleModal = (type, user) => {
    setSearchState({
      ...searchState,
      isModalOpen: !searchState.isModalOpen,
      modalTitle: type === "Edit" ? "Edit user" : "Create user"
    });
  };

  return (
    <>
      <Card>
        <Card.Header>
          <Button variant="primary" onClick={toggleModal}>
            Create user
          </Button>
        </Card.Header>
        <Card.Body>
          <UserLists />
        </Card.Body>
      </Card>

      <Modal
        show={searchState.isModalOpen}
        onHide={toggleModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {searchState.modalTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserCrud />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={toggleModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserPage;
