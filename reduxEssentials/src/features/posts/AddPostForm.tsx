import React from "react";
// import { useNavigate } from "react-router-dom";
// import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectAllUsers } from "../users/userSlice";
import { postAdded } from "./postsSlice";

interface AddPostFormFields extends HTMLFormControlsCollection {
  postTitle: HTMLInputElement;
  postAuthor: HTMLSelectElement;
  postContent: HTMLTextAreaElement;
}

interface AddPostFormElements extends HTMLFormElement {
  readonly elements: AddPostFormFields;
}

const AddPostForm = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectAllUsers);
  //   const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<AddPostFormElements>) => {
    event.preventDefault();
    const { elements } = event.currentTarget;
    const title = elements.postTitle.value;
    const content = elements.postContent.value;
    const user = elements.postAuthor.value;

    dispatch(postAdded(title, content, user));
    event.currentTarget.reset();
    // navigate(`/`);
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900">
        Add a New Post
      </h2>
      <form
        className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="postTitle"
          className="block text-gray-700 text-center font-medium mb-2"
        >
          Post Title
        </label>

        <input
          type="text"
          name="postTitle"
          id="postTitle"
          defaultValue=""
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <label
          htmlFor="postAuthor"
          className="block text-center text-gray-700 font-medium mb-2"
        >
          Author
        </label>
        <select
          id="postAuthor"
          name="postAuthor"
          required
          className="w-full border border-gray-300 rounded-md mb-4 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="" disabled>
            Select an author
          </option>
          {usersOptions}
        </select>
        <label
          htmlFor="postContent"
          className="block text-gray-700 text-centers font-medium mb-2"
        >
          Content
        </label>
        <textarea
          id="postContent"
          name="postContent"
          defaultValue=""
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

export default AddPostForm;
