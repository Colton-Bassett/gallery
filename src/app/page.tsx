import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";

// Serverside Rendered component

// Tell next.js that this page is dynamic-rendering instead of static or auto.
// Updates on every request instead of showing a cached or static version (useful for seeing database updates in real time).
export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {[...images].map((image) => (
        <div key={image.id} className="w-48 flex-col">
          <img src={image.url}></img>
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

// This is running ONLY on the server (can do database calls and not have to worry about it. Can even call sql directly here.)
export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">Please Sign in</div>
      </SignedOut>
      <SignedIn>
        <Images></Images>
      </SignedIn>
    </main>
  );
}
