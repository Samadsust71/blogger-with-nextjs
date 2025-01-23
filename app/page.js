import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <div>
      <h1 className="text-2xl my-6 font-bold">All Blog Posts</h1>
      <div className="mb-6">
        {posts.map((post) => (
          <ul
            key={post.id}
            className="space-y-10 list-disc list-inside hover:text-blue-700 hover:underline cursor-pointer"
          >
            <li>
              <Link href={`/${post.id}`}>{post.title}</Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
