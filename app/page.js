import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <div className="my-10">
      <h1 className="text-2xl mb-6 font-bold">All Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col bg-gradient-to-tr from-gray-800 to-gray-900 p-6 rounded-lg space-y-4"
          >
           
              <p className="text-white/70">Id: {post.id}</p>
              <div className="flex-grow">
                <h1 className="text-xl font bold"> Title: {post.title}</h1>
              </div>
              <Link
                href={`/${post.id}`}
                className="bg-gray-900 hover:bg-gray-950 text-white font-bold py-2 px-4 rounded w-fit"
              >
                View details
              </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
