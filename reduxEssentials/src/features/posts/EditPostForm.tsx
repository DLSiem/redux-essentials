import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useParams, useNavigate } from "react-router-dom";
import { postUpdated } from "./postsSlice";

interface EditPostFormFields extends HTMLFormControlsCollection {
  postTitle: HTMLInputElement;
  postContent: HTMLTextAreaElement;
}

interface EditPostFormElements extends HTMLFormElement {
  readonly elements: EditPostFormFields;
}

const EditPostForm = () => {
  const { postId } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const post = useAppSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );

  if (!post) {
    return (
      <section>
        <h2>Post Not Found</h2>
      </section>
    );
  }
  const handleSubmit = (event: React.FormEvent<EditPostFormElements>) => {
    event.preventDefault();
    const { elements } = event.currentTarget;
    const title = elements.postTitle.value;
    const content = elements.postContent.value;
    console.log(title, content);

    if (title && content) {
      dispatch(postUpdated({ id: post.id, title, content }));
      navigate(`/posts/${postId}`);
    }
  };

  return (
    <section className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900">
        Add a New Post
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto"
      >
        <label
          htmlFor="postTitle"
          className="block text-gray-700 font-medium mb-2"
        >
          Post Title:
        </label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          defaultValue={post.title}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <label
          htmlFor="postContent"
          className="block text-gray-700 font-medium mb-2"
        >
          Content:
        </label>
        <textarea
          id="postContent"
          name="postContent"
          defaultValue={post.content}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Save Post
        </button>
      </form>
    </section>
  );
};

export default EditPostForm;
