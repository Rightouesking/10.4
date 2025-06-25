import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav>
      <Link to="/blog">Blog</Link> |{" "}
      {!isAuthenticated ? (
        <Link to="/login">Log In</Link>
      ) : (
        <>
          <button onClick={() => { logout(); navigate("/login"); }}>Log Out</button> | 
          <Link to="/admin">Admin</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;