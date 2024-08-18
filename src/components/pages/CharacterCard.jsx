import PropTypes from 'prop-types';
import { translateSpecie } from '../services/SpecieTranslation';

function CharacterCard({ character }) {
    //global variables



    //translation


    return (
        <div className="details">
            <img src={character.image}
                className='card__img'
                alt={`Picture of + ${character.name}`}
                title={`Picture of + ${character.name}`}
            />
            <div>
                <h3 className="card__title">{character.name}</h3>
                <p className="card__description">{translateSpecie(character.species)}</p>
            </div>
        </div>
    );
}
CharacterCard.propTypes = {
    character: PropTypes.object.isRequired
};

export default CharacterCard;