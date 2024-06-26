import AddUser from './Components/User/AddUser'
import UserList from './Components/User/UserList'
import { useState } from 'react'
import './App.css'

function App() {

  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge, uCollegeName) => {
    setUserList((prevUserList) => {
      return [...prevUserList, {name: uName, age: uAge, college: uCollegeName, id: Math.random().toString()}]
    })
  }

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </>
  );
}

export default App
