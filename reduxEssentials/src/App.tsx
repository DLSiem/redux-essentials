import Counter from "./features/counter/counter";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./components";
import PostList from "./features/posts/PostList";
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
