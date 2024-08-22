import '../../styles/layout/_characterDetail.scss';

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
            <section className="detail__section">
                <div className="card__detail">
                    <div >
                        <img src={getCharacter.image}
                            className='cardDetail__img'
                            alt={`Picture of ${getCharacter.name}`}
                            title={`Picture of ${getCharacter.name}`} />
                    </div>
                    <form className="form__detail">
                        <div>
                            <p className="cardDetail__description name">{getCharacter.name}</p>
                            <p className="cardDetail__description ">Estado: {translateStatus(getCharacter.alive)}</p>
                            <p className="cardDetail__description">Especie: {translateSpecie(getCharacter.species)}</p>
                            <p className="cardDetail__description">Género: {translateGender(getCharacter.gender)}</p>
                            <p className="cardDetail__description">Casa: {getCharacter.house}</p>
                        </div>
                    </form>

                </div>
                <div className="back__btn">
                    <Link className="back__btn__style" to='/'> <span><i className="fa-solid fa-backward"></i></span>Volver</Link>
                </div>
            </section>
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
