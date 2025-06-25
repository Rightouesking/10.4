import { useParams } from "react-router-dom";
import { posts } from "./posts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <h2>Post not found</h2>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;