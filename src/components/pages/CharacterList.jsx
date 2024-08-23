import '../../styles/layout/_filters.scss';
import '../../styles/layout/_landing.scss';
import PropTypes from 'prop-types';
import CharacterCard from "./CharacterCard";

function CharacterList({ characters, searchWord }) {

    if (characters.length === 0) {
        return (
            <p className='p__text'>No hay ningún personaje que coincida con la palabra: {searchWord}</p>
        )
    }
    return (
        <form className='form'>
            <ul className='cards__ul'>
                {characters.map((character) => (
                    <li key={character.id} className="card__li">
                        <CharacterCard character={character} />
                    </li>
                ))}
            </ul>
        </form>
    );
}

CharacterList.propTypes = {
    characters: PropTypes.array.isRequired,
    searchWord: PropTypes.string.isRequired,
};

export default CharacterList;