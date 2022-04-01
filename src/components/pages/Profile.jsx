import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUserByID } from "../Content/Users";
import { Card, Container, ListGroup, ListGroupItem } from "react-bootstrap";

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchUserByID(id)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        setUser(null);
      });
  }, [id]);

  return (
    <>
      {user ? (
        <Container>
          {" "}
          <Card style={{ width: "18rem", margin: "auto" }}>
            <Card.Img
              variant="top"
              src={`https://i.pravatar.cc/150?img=${user.id}`}
            />
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>Information of user</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{user.email}</ListGroupItem>
              <ListGroupItem>{user.phone}</ListGroupItem>
            </ListGroup>
          </Card>{" "}
        </Container>
      ) : (
        <p className="p-3 bg-alert">Error while fetching data</p>
      )}
      ;
    </>
  );
};

export default Profile;
