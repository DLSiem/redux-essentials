import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectAllPosts } from "./postsSlice";
import { PostAuthor, ReactionButtons } from ".";
import { TimeAgo } from "../../components";

const PostList = () => {
  const posts = useAppSelector(selectAllPosts);

  //   order posts by newest
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.time.localeCompare(a.time));

  const renderPosts = orderedPosts.map((post) => (
    <article
      key={post.id}
      className="bg-white shadow-md rounded-lg p-6 mb-2 border border-gray-200 hover:shadow-lg transition-shadow"
    >
      <h2 className="text-xl font-bold mb-2 text-gray-800 hover:text-gray-500 transition-colors">
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h2>
      <div className="flex justify-end">
        <PostAuthor userId={post.user} />
      </div>
      <p className="text-gray-600 mb-4">{post.content.substring(0, 100)}...</p>
      <div className="text-sm text-gray-500 flex justify-between">
        <TimeAgo timeStamp={post.time} />
        <ReactionButtons post={post} />
      </div>
    </article>
  ));

  return (
    <section className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900">
        Posts
      </h2>
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {renderPosts}
      </div>
    </section>
  );
};

export default PostList;
