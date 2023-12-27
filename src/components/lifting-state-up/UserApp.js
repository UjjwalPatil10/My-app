import React, { useState } from "react";
import Register from "./Register";
import UserList from "./UserList";

const UserApp = () => {
  const [users, setUsers] = useState([]);
  const getUser = (user) => {
    //here we pass user object(data) to getUser method and that data will update in users(state) when we call getUser(user) in child component Register

    setUsers([...users, user]);
  };
  return (
    <>
      {/* below we pass getUser method to child i.e Register and say to register(child) you have user object data 
    so child take that method as a prop and  we take any 
    <button onClick={()=>getUser(user)}>send</button> on that button we call getUser(user) */}
      <Register getUser={getUser} />
      <hr />
      {/* below we gave items={users} so our items will be updated in state of parent i.e UserApp  */}
      {/* in users i.e parent state we update the data of child(Register) and that data we pass to the UserList  */}
      <UserList items={users} />
    </>
  );
};

export default UserApp;
