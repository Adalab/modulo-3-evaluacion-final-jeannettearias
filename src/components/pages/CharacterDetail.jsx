import '../../styles/layout/_characterDetail.scss';

import { Link, useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { translateGender, translateSpecie, translateStatus } from '../services/Translation'

function CharacterDetail({ findCharacter }) {
    //events and functions
    const params = useParams();
    const characterToShow = findCharacter(params.id);

    if (characterToShow === undefined) {
        return (
            <p className='p__text'>El personaje que buscas no existe</p>
        )
    }


    //HTML code
    return (
        <>
            <section className='detail__section'>
                <div className="card__detail">
                    <img src={characterToShow.image}
                        className='cardDetail__img'
                        alt={`Picture of ${characterToShow.name}`}
                        title={`Picture of ${characterToShow.name}`} />
                    <form className="form__detail">
                        <p className="cardDetail__description name">{characterToShow.name}</p>
                        <p className="cardDetail__description ">Estado: {translateStatus(characterToShow.alive)}</p>
                        <p className="cardDetail__description">Especie: {translateSpecie(characterToShow.species)}</p>
                        <p className="cardDetail__description">Género: {translateGender(characterToShow.gender)}</p>
                        <p className="cardDetail__description">Casa: {characterToShow.house}</p>
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
