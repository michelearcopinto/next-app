// Corretto pattern per Next.js Server Component

import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { redirect } from "next/navigation";

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || "SUPERSECRET"
);

export default async function About() {
  const token = cookies().get("token")?.value;
  if (!token) redirect("/login");

  let payload;
  try {
    const { payload: verified } = await jwtVerify(token, secret);
    payload = verified;
  } catch (e) {
    // In caso di JWT non valido/scaduto esegui subito redirect
    redirect("/login");
  }

  // Ora il JSX è "protetto" ed eseguito solo se token valido
  return (
    <>
      <h1>About Page</h1>
      <h1>Benvenuto {payload.username}</h1>
      {/* <Counter /> */}
      {/* <MyForm /> */}
      {/* <MyModernForm /> */}
    </>
  );
}
