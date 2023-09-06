import React from "react";
import Card from "./Card";
import './UserList.css';

const UserList = (props) => {
  return (
    <Card className='users'>
      <ul> 
        {props.users.map((user) => (
            <li key={user.id}>
            {user.name} ({user.age} year)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
