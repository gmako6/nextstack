import React from "react";

const User = ({ params }) => {
  return (
    <div>
      <h1>Info about {params.user}</h1>
      <p>Hello I'm {params.user}</p>
    </div>
  );
};

export default User;
