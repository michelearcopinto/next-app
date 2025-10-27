"use client";
export default function MyForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch("/api/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    alert(data.content || data.error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="id" name="name" placeholder="Insert name" />
      <input type="text" id="id" name="message" placeholder="Insert message" />
      <button type="submit">Invia</button>
    </form>
  );
}
