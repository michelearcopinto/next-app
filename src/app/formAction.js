"use server";
export async function submitFormAction(prevState, formData) {
  const name = formData.get("name");
  const message = formData.get("message");
  if (!name || !message) {
    return { error: "Compila tutti i campi" };
  }
  return { message: `Ciao ${name}: ${message}` };
}
