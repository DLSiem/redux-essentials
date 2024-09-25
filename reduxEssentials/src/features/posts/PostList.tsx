import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

const PostList = () => {
  const posts = useAppSelector((state) => state.posts);
  const renderPosts = posts.map((post) => (
    <article
      key={post.id}
      className="bg-white shadow-md rounded-lg p-6 mb-6 border hover:shadow-lg transition-shadow"
    >
      <h2 className="text-xl font-bold mb-2 text-gray-800 hover:text-gray-500 ">
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h2>
      <p className="text-gray-600">{post.content.substring(0, 100)}...</p>
    </article>
  ));

  return (
    <section className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900">
        Posts
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {renderPosts}
      </div>
    </section>
  );
};

export default PostList;
