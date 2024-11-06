import React, { useState } from 'react';
import './index.css';
function Hooks() {
  // Initialize state with a default name
  const [name, setName] = useState("John");

  // Function to change the name
  const changeName = () => {
    setName("Mahesh"); // Change to the desired name
  };

  return (
    <div className="header">
      <h1>{name}</h1>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default Hooks;
