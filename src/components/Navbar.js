import React, {useState} from 'react';
import { Link, useLocation } from "react-router-dom";
import "./styles/Navbar.css"

function Navbar() {
    const location = useLocation();
    const [isShown, setShown] = useState(false);
    let showClass = !isShown ? `collapse navbar-collapse`: `collapse navbar-collapse show`;
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">JS</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"  onClick={() => setShown(!isShown)}>
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className={showClass} id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto special">
                        <li class="nav-item active">
                            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                            Home
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                                Portfolio
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/contacts" className={location.pathname === "/contacts" ? "nav-link active" : "nav-link"}>
                                Contact
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/resume" className={location.pathname === "/resume" ? "nav-link active" : "nav-link"}>
                                Resume
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
