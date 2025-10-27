"use client";
import { data } from "autoprefixer";
import { useState } from "react";

export default function Login() {
  const [error, setError] = useState("");

  // Semplice handler per login
  async function handleSubmit(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      window.location.href = "/about"; // oppure About
    } else {
      const data = await res.json();

      setError(data.error);
    }
  }

  return (
    <>
      <h1>Login Page</h1>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Inserisci username"
          autoComplete="username"
          required
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Inserisci password"
          autoComplete="current-password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
