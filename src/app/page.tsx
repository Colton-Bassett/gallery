import Link from "next/link";

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

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4 p-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url}></img>
          </div>
        ))}
      </div>
    </main>
  );
}
