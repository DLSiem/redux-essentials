import Counter from "./features/counter/counter";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./components";
import {
  PostList,
  AddPostForm,
  SinglePostPage,
  EditPostForm,
} from "./features/posts";

import { LoginPage } from "./features/auth";
import { useAppSelector } from "./app/hooks";

import { selectCurrentUsername } from "./features/auth/authSlice";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const authUsername = useAppSelector(selectCurrentUsername);

  return authUsername ? children : <LoginPage />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <PostList />,
      },
      {
        path: "/posts/:postId",
        element: <SinglePostPage />,
      },
      {
        path: "/editpost/:postId",
        element: (
          <ProtectedRoute>
            <EditPostForm />
          </ProtectedRoute>
        ),
      },
      {
        path: "/createpost",
        element: (
          <ProtectedRoute>
            <AddPostForm />
          </ProtectedRoute>
        ),
      },
      {
        path: "/auth/login",
        element: <LoginPage />,
      },

      {
        path: "/counter",
        element: <Counter />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
