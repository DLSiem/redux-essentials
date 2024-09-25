import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../app/hooks";

import { type Post, postAdded } from "./postsSlice";

interface AddPostFormFields extends HTMLFormControlsCollection {
  postTitle: HTMLInputElement;
  postContent: HTMLTextAreaElement;
}

interface AddPostFormElements extends HTMLFormElement {
  readonly elements: AddPostFormFields;
}

const AddPostForm = () => {
  const dispatch = useAppDispatch();
  const handleSubmit = (event: React.FormEvent<AddPostFormElements>) => {
    event.preventDefault();
    const { elements } = event.currentTarget;
    const title = elements.postTitle.value;
    const content = elements.postContent.value;
    console.log(title, content);

    const newPost: Post = {
      id: nanoid(),
      title,
      content,
    };

    dispatch(postAdded(newPost));
    event.currentTarget.reset();
  };
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
          className="block text-gray-700 font-medium mb-2"
        >
          Post Title:
        </label>
        <input
          type="text"
          id="postTitle"
          defaultValue=""
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
