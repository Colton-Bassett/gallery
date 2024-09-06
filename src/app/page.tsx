import Link from "next/link";
import { db } from "~/server/db";

// Serverside Rendered component

// Tell next.js that this page is dynamic-rendering instead of static or auto.
// Updates on every request instead of showing a cached or static version.
export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/2900c05a-2892-42f8-b8b5-2cc159e958a0-wjszdb.jpg",
  "https://utfs.io/f/fbb84244-3cf4-4f80-aed7-36ae8dbe4077-vex5ur.jpg",
  "https://utfs.io/f/e840c486-8672-498a-aef8-e8ba7f65e9f9-whlcgk.jpg",
  "https://utfs.io/f/2c29451c-bd0f-4a7b-85d8-92faa601f09e-jmh0ex.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

// This is running ONLY on the server (can do database calls and not have to worry about it. Can even call sql directly here.)
export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4 p-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url}></img>
          </div>
        ))}
      </div>
    </main>
  );
}
