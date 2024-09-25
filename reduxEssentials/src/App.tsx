import Counter from "./features/counter/counter";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./components";
import {
  PostList,
  AddPostForm,
  SinglePostPage,
  EditPostForm,
} from "./features/posts";
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
        element: <EditPostForm />,
      },
      {
        path: "/createpost",
        element: <AddPostForm />,
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
