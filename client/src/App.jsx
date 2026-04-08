import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import CreateBlog from "./pages/CreateBlog.jsx";

import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import EditBlog from "./pages/EditBlog.jsx";
import Navbar from "./components/Navbar.jsx"

function App() {
  return (
    <Router>
      <div className="min-h-screen pt-20">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/create"
            element={
              <ProtectedRoute>
                <CreateBlog />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/edit/:id"
            element={
              <ProtectedRoute>
                <EditBlog />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
