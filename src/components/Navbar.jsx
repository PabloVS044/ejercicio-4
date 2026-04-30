import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useFavorites } from "@/context/FavoritesContext";

export default function Navbar({ title }) {
    const { favorites } = useFavorites();

    return(
        <header className="site-header">
            <nav className="site-nav page-shell">
                <NavLink className="site-brand" to="/">
                    <h2>{title}</h2>
                </NavLink>

                <ul className="site-nav-links">
                    <li className="site-nav-item">
                        <NavLink
                            className={({ isActive }) =>
                                `site-nav-link${isActive ? " is-active" : ""}`
                            }
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="site-nav-item">
                        <NavLink
                            className={({ isActive }) =>
                                `site-nav-link${isActive ? " is-active" : ""}`
                            }
                            to="/items"
                        >
                            Agentes
                        </NavLink>
                    </li>
                    <li className="site-nav-item">
                        <NavLink
                            className={({ isActive }) =>
                                `site-nav-link${isActive ? " is-active" : ""}`
                            }
                            to="/favorites"
                        >
                            Favoritos ({favorites.length})
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
};
