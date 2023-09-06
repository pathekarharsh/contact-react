import React, { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import "./Adduser.css";

const Adduser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");

  const addUser = (event) => {
    event.preventDefault();
    //conditon
    if (userName.trim().length === 0 || age.trim().length === 0) {
      return;
    }
    if (+age < 1) {
      return;
    }
    console.log(userName, age);
    props.onAddUser(userName, age);
    setUserName(" ");
    setAge(" ");
  };

  const usernameHandler = (event) => {
    setUserName(event.target.value);
    //console.log(userName)
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
    //console.log(age)
  };

  return (
    <Card>
      <form onSubmit={addUser} className="input">
        <label htmlFor="username">UserName</label>
        <input
          id="username"
          type="text"
          value={userName}
          onChange={usernameHandler}
        />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" value={age} onChange={ageHandler} />
        <Button type="submit">Add User</Button>
      </form>

    </Card>
  );
};

export default Adduser;
