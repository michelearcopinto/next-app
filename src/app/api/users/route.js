import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { id: 1, name: "Mario Rossi", email: "mario@example.com" },
    { id: 2, name: "Luca Bianchi", email: "luca@example.com" },
  ]);
}
