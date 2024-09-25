import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectAllUsers } from "../users/userSlice";
import { useNavigate } from "react-router-dom";
import { userLoggedIn } from "./authSlice";

interface LoginPageFormFields extends HTMLFormControlsCollection {
  username: HTMLSelectElement;
}

interface LoginPageFormElements extends HTMLFormElement {
  readonly elements: LoginPageFormFields;
}

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectAllUsers);
  const navigate = useNavigate();

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const handleSubmit = (e: React.FormEvent<LoginPageFormElements>) => {
    e.preventDefault();
    const username = e.currentTarget.elements.username.value;

    dispatch(userLoggedIn(username));
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center text-center p-4 max-w-md mx-auto bg-white rounded-lg shadow-lg mt-8 sm:p-6 md:p-8">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Login</h2>
      <form onSubmit={handleSubmit}>
        <select
          name="username"
          id="username"
          required
          className="px-3 py-2 text-xl border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-300 focus:outline-none w-full text-center"
        >
          <option value="">Select a user...</option>
          {userOptions}
        </select>
        <button
          type="submit"
          className="px-4 py-2 mt-4 text-2xl bg-blue-500 text-white rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
