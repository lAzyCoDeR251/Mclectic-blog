// import logo from './logo.svg';
import "./App.css";
import Home from "./pages/Home";
import Login from "./Admin/Login/Login";
import AdminHome from "./Admin/index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes, Route, Navigate } from "react-router-dom";
import Movies from "./pages/Movies";
import Space from "./pages/Space";
import Facts from "./pages/Facts";


function App() {
  const isAuthenticated = !!localStorage.getItem("authToken");

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/admin/login"
        element={isAuthenticated ? <Navigate to="/index" /> : <Login />}
      />
      <Route
        path="/index"
        element={
          isAuthenticated ? (
            <AdminHome />
          ) : (
            // Redirect to login if not authenticated
            <Navigate to="/admin/login" />
          )
        }
      />
      <Route path = "/about" element={<About />} />
      <Route path = "/contact" element={<Contact />} />
      <Route path = "/movies" element={<Movies />} />
      <Route path = "/space" element={<Space />} />
      <Route path = "/facts" element={<Facts />} />

    </Routes>
  );
}
export default App;
