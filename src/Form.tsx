import React, { useState } from "react";
import "./Form.css";

function MyForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  // Cambia el tipo de 'e' a React.FormEvent<HTMLFormElement>
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita que la página se recargue
    // Aquí puedes procesar los datos o enviarlos a un servidor
    console.log("Form Submitted", username, email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="usernameInput"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        className="emailInput"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <button className="myButton" type="submit">Submit</button>
    </form>
  );
}

export default MyForm;