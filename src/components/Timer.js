// Questo diventa un Client Component
"use client";

import { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>Sono passati {seconds} secondi</p>;
}
