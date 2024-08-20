import { Link, useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { translateGender, translateSpecie, translateStatus } from '../services/Translation'

function CharacterDetail({ findCharacter }) {
    //events and functions
    const params = useParams();
    const characterToShow = findCharacter(params.id);

    if (characterToShow !== undefined) {
        localStorage.setItem('character', JSON.stringify(characterToShow));
    }
    const getCharacter = JSON.parse(localStorage.getItem('character'));

    //HTML code
    return (
        <>
            <div>
                <div>
                    <img src={getCharacter.image}
                        className='cardDetail__img'
                        alt={`Picture of ${getCharacter.name}`}
                        title={`Picture of ${getCharacter.name}`} />
                </div>
                <form className="cardDetail__form">
                    <div>
                        <p className="cardDetail__description">{getCharacter.name}</p>
                        <p className="cardDetail__description">{translateStatus(getCharacter.alive)}</p>
                        <p className="cardDetail__description">{translateSpecie(getCharacter.species)}</p>
                        <p className="cardDetail__description">{translateGender(getCharacter.gender)}</p>
                        <p className="cardDetail__description">{getCharacter.house}</p>
                    </div>
                </form>
                <Link to='/'>Volver</Link>
            </div>
        </>
    );
}

CharacterDetail.propTypes = {
    findCharacter: PropTypes.func,
    translateGender: PropTypes.string,
    translateSpecie: PropTypes.string,
    translateStatus: PropTypes.string,
}
export default CharacterDetail;
