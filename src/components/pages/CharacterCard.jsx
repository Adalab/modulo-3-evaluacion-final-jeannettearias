import '../../styles/layout/_filters.scss';
import '../../styles/layout/_landing.scss';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { translateSpecie } from '../services/Translation';

function CharacterCard({ character }) {
    return (
        <Link to={`/detail/ ${character.id}`} className="details">
            <img src={character.image}
                className='card__img'
                alt={`Picture of ${character.name}`}
                title={`Picture of ${character.name}`}
            />
            <div className='card__list__container'>
                <h3 className="card__title">{character.name}</h3>
                <p className="card__description">{translateSpecie(character.species)}</p>
            </div>
        </Link>
    );
}
CharacterCard.propTypes = {
    character: PropTypes.object.isRequired
};

export default CharacterCard;
