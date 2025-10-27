import Link from "next/link";

export const dynamic = "force-dynamic"; // forza SSR

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  return res.json();
}

export default async function SSRPostsPage() {
  const posts = await getPosts();

  return (
    <main>
      <h1>Server Posts (SSR)</h1>
      <ul className="">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts-ssr/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
