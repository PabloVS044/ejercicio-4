import PropTypes from 'prop-types';

export default function AbilityCard({ ability }){
    return(
        <article className="ability-card" key={ability.slot}>
            <div className="ability-icon-wrapper">
                {ability.displayIcon && <img src={ability.displayIcon} alt={ability.displayName} />}
            </div>
            <h3>{ability.displayName}</h3>
            <p>{ability.description}</p>
        </article>
    )
}

AbilityCard.propTypes = {
  ability: PropTypes.shape({
    slot: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    description: PropTypes.string,
    displayIcon: PropTypes.string,
  }).isRequired,
};