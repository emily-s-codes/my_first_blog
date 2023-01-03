import "./Navbar.css"
import { Link, NavLink } from "react-router-dom"

const AdminNavbar = () => {
    return (<header className="navbarHeader">
        <Link to="/"><h1>My First Blog</h1></Link>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/admin/login">Log In</NavLink>
            <NavLink to="/admin/manage">Manage Posts</NavLink>
            <NavLink to="/admin/add">Add Post</NavLink>
        </nav>
    </header >);
}

export default AdminNavbar;