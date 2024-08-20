import { Link, useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { translateGender, translateSpecie, translateStatus } from '../services/Translation'

function CharacterDetail({ findCharacter }) {
    //events and functions
    const params = useParams();

    const characterToShow = findCharacter(params.id);

    //HTML code
    return (
        <>
            <div>
                <div>
                    <img src={characterToShow.image}
                        className='cardDetail__img'
                        alt={`Picture of + ${characterToShow.name}`}
                        title={`Picture of + ${characterToShow.name}`} />
                </div>
                <div>
                    <p className="cardDetail__description">{characterToShow.name}</p>
                    <p className="cardDetail__description">{translateStatus(characterToShow.alive)}</p>
                    <p className="cardDetail__description">{translateSpecie(characterToShow.species)}</p>
                    <p className="cardDetail__description">{translateGender(characterToShow.gender)}</p>
                    <p className="cardDetail__description">{characterToShow.house}</p>
                </div>
                <Link to='/'>Volver</Link>
            </div>
        </>
    );
}

CharacterDetail.propTypes = {
    findCharacter: PropTypes.func.isRequired,
}
export default CharacterDetail;
