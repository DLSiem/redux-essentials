import { useAppSelector } from "../../app/hooks";
import { useParams, Link } from "react-router-dom";

const SinglePostPage = () => {
  const { postId } = useParams();
  const post = useAppSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );

  return (
    <section className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {!post ? (
        <h2 className="text-center text-2xl font-semibold text-gray-800">
          No Post Found
        </h2>
      ) : (
        <article className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            {post.title}
          </h2>
          {/* edit button */}
          <p className="text-right text-sm text-gray-600 hover:text-indigo-600 transition-colorsduration-300mb-4">
            <Link
              to={`/editPost/${post.id}`}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg inline-block"
            >
              Edit
            </Link>
          </p>

          <p className="text-gray-700 leading-relaxed">{post.content}</p>
        </article>
      )}
    </section>
  );
};

export default SinglePostPage;
