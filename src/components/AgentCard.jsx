import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useFavorites } from "@/context/FavoritesContext";

export default function AgentCard({ agent }) {

    const { isFavorite, toggleFavorite } = useFavorites();

    const agentIsFavorite = isFavorite(agent.uuid);
    
    return(
        <article className="agent-list-card" key={agent.uuid}>
            <div className="agent-list-icon-wrap">
                <img
                    className="agent-list-icon"
                    src={agent.displayIcon}
                    alt={agent.displayName}
                />
            </div>
            <h2>{agent.displayName}</h2>
            <button
                className={`favorite-btn${agentIsFavorite ? " is-active" : ""}`}
                type="button"
                onClick={() => toggleFavorite(agent)}
            >
                {agentIsFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
            </button>
            <p>{agent.description}</p>
            <Link className="agent-list-link" to={`/items/${agent.uuid}`}>
                Ver detalle
            </Link>
        </article>
    )
}

AgentCard.propTypes = {
  agent: PropTypes.shape({
    uuid: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    description: PropTypes.string,
    displayIcon: PropTypes.string,
  }).isRequired,
};
