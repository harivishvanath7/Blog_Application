import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // go back home
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md border-b z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          Hari's Blogs
        </Link>

        {/* Links */}
        <div className="flex gap-6 items-center">

          <Link to="/" className="hover:text-blue-500 transition">
            Home
          </Link>

          {/* 👇 CONDITIONAL RENDER */}
          {token ? (
            <>
              <Link
                to="/admin/dashboard"
                className="hover:text-blue-500 transition"
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-xl hover:scale-105 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/admin/login"
              className="px-4 py-2 bg-black text-white rounded-xl hover:scale-105 transition"
            >
              Admin Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;