import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { fetchAllusers } from '../Content/Users'
import UsersTable from '../Content/UsersTable'
const Home = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchAllusers()
      .then((res) => {
        setUsers(res.data)
      })
      .catch((err) => {
        setUsers(null)
      })
  }, [setUsers])

  return (
    <>
      {users ? (
        <Container>
          {' '}
          <UsersTable users={users} />{' '}
        </Container>
      ) : (
        <p className="p-3 text-danger">Error </p>
      )}
      ;
    </>
  )
}

export default Home
