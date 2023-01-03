import "./Navbar.css"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    return (<header className="navbarHeader">
        <Link to="/"><h1>My First Blog</h1></Link>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/admin">Log In</NavLink>
        </nav>
    </header >);
}

export default Navbar;