import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddPost from "../pages/AddPost.jsx";
import AllPosts from "../pages/AllPosts.jsx";
import EditPost from "../pages/EditPost.jsx";
import Home from "../pages/Home.jsx";
import Post from "../pages/Post.jsx";
import App from "./App.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/Signup.jsx";
import { AuthLayout } from "./components/index.js";
import "./index.css";
import store from "./store/store.js";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/Blog/", element: <Home /> },
        {
          path: "/Blog/login",
          element: (
            <AuthLayout authentication={false}>
              <Login />
            </AuthLayout>
          ),
        },
        {
          path: "/Blog/signup",
          element: (
            <AuthLayout authentication={false}>
              <SignUp />
            </AuthLayout>
          ),
        },
        {
          path: "/Blog/all-posts",
          element: (
            <AuthLayout authentication>
              {" "}
              <AllPosts />
            </AuthLayout>
          ),
        },
        {
          path: "/Blog/add-post",
          element: (
            <AuthLayout authentication>
              {" "}
              <AddPost />
            </AuthLayout>
          ),
        },
        {
          path: "/Blog/edit-post/:slug",
          element: (
            <AuthLayout authentication>
              {" "}
              <EditPost />
            </AuthLayout>
          ),
        },
        {
          path: "/Blog/post/:slug",
          element: <Post />,
        },
      ],
    },
  ],
  { baseName: "/Blog" }
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
