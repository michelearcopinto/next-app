import { NextResponse } from "next/server";

export async function POST(req) {
  const formData = await req.formData();
  const name = formData.get("name");
  const message = formData.get("message");
  if (!name || !message) {
    return NextResponse.json(
      { error: "Compila tutti i campi" },
      { status: 400 }
    );
  }
  return NextResponse.json({
    success: true,
    content: `Ciao ${name}: ${message}`,
  });
}
