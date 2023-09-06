import React, { useState } from "react";
import Adduser from "./components/Adduser";
import UserList from "./components/UsersList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      <Adduser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
