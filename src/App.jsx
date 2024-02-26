import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer, Login } from "./components";

import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("App -> useEffect");
    authService
      .getCurrentUser()
      .then((userDaata) => {
        if (userDaata) {
          dispatch(login({ userData: userDaata }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <Outlet/>
        <Footer />
      </div>
    </div>
  ) : (
    <div>hello</div>
  );
}

export default App;
