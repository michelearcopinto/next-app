"use client";

import { submitFormAction } from "@/app/formAction";
import { useActionState } from "react";

export default function MyModernForm() {
  const [state, action] = useActionState(submitFormAction, {
    message: "",
    error: "",
  });
  return (
    <form action={action}>
      <input type="text" name="name" placeholder="Insert name" />
      <input type="text" name="message" placeholder="Insert message" />
      <button type="submit">Invia</button>
      <div>{state.message || state.error}</div>
    </form>
  );
}
