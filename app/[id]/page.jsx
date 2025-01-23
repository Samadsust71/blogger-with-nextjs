import getPost from "@/lib/getPost";



const Post = async ({params}) => {
    const { id } = params;
    const post = await getPost(id);
    console.log(post)

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center gap-4 mb-4">
        <span>Id: {post?.id}</span>
        <span>UserId: {post?.userId}</span>
      </div>
      <h1 className="text-2xl font-bold">{post?.title}</h1>
      <p className="text-white/80 mt-6 w-[70%] text-center">{post?.body}</p>
    </div>
  )
}

export default Post
