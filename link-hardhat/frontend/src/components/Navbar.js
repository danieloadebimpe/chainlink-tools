import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="navbar">
            <h1 className="navbar-logo">navbar</h1>
            <div className="links"> 
                <Link to="/">Home</Link>
                <Link to="/call">simulate</Link>
                <Link to="/settings">settings</Link>
                <Link to="/logs">logs</Link>
            </div>
        </nav>
    );
}

export default Navbar;