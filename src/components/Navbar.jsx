import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Navbar({ title }) {
    return(
        <header>
            <nav>
                <h2>{title}</h2>

                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/items">Agentes</Link>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

Navbar.PropTypes = {
    title: PropTypes.string.isRequired,
}