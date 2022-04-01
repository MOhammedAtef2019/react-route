import React from "react";
import UserRecord from "./UserRecord";
import { Table } from "react-bootstrap";

const UsersTable = (props) => {
  const { users } = props;
  return (
    <Table striped bordered hover style={{ textAlign: "center" }}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserRecord
            key={user.id}
            id={user.id}
            name={user.name}
            phone={user.phone}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default UsersTable;
