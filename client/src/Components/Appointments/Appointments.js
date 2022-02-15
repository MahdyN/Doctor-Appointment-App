import React from "react";

const Appointments = ({ user }) => {

  // const { username, first_name, last_name } = user
  
  return (
    <div>
                  {user ? <><li>Name: {user.first_name} {user.last_name}</li><li>Username: {user.username}</li></> : null}
    </div>
  )
};

export default Appointments;