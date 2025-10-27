import { NextResponse } from "next/server";
import { SignJWT } from "jose";

// Segreto per firmare i token
const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || "SUPERSECRET"
);

export async function POST(request) {
  const body = await request.json();
  const { username, password } = body;

  // Verifica credenziali (in produzione: query DB!)
  if (username !== "admin" || password !== "password") {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  // Crea JWT valido 1 ora
  const token = await new SignJWT({ username })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(secret);

  // Imposta cookie HttpOnly
  const response = NextResponse.json({ message: "Login OK" });
  response.cookies.set("token", token, { httpOnly: true, path: "/" });

  return response;
}
