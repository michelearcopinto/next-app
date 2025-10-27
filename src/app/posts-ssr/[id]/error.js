// posts/[id]/error.js
"use client";
import { useEffect } from "react";
export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Si è verificato un errore!</h2>
      <button onClick={() => reset()}>Riprova</button>
    </div>
  );
}
