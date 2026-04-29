import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function AgentCard({ agent }) {
    return(
        <article className="agent-list-card" key={agent.uuid}>
                <img
                    className="agent-list-icon"
                    src={agent.displayIcon}
                    alt={agent.displayName}
                />
            <h2>{agent.displayName}</h2>
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