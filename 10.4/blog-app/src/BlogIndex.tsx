import { Link } from "react-router-dom";
import { posts } from "./posts";

const BlogIndex = () => (
  <div>
    <h1>Blog</h1>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default BlogIndex;