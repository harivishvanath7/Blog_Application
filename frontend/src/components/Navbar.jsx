import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between">
            <Link to="/" className="font-bold text-xl">BlogApp</Link>
            <div className="space-x-4">
                <Link to="/" className="hover:text-gray-300">Home</Link>
                <Link to="/login" className="hover:text-gray-300">Login</Link>
                <Link to="/register" className="hover:text-gray-300">Register</Link>
                <Link to="/create" className="hover:text-gray-300">Create</Link>
            </div>
        </div>    
    </nav>
  )
}

export default Navbar;
