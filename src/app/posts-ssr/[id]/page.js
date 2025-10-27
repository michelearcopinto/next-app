// app/posts/[id]/page.js
import { notFound } from "next/navigation";

export default async function PostPage({ params }) {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  // Se la risorsa non esiste o risposta non valida
  if (!res.ok) {
    notFound(); // Next.js mostra 404
  }
  const post = await res.json();

  // Gestione caso dati nulli o oggetto vuoto
  if (!post?.id) {
    notFound();
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
