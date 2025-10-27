import Link from "next/link";

// app/posts/[id]/not-found.js
export default function IdNotFound() {
  return (
    <div>
      <h1>Questo post non esiste</h1>
      <Link href={"/posts-ssr"}>Torna alla lista</Link>
    </div>
  );
}
