import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import CreateBlog from "./pages/CreateBlog.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/create" element={<CreateBlog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;