import PropTypes from 'prop-types';

import HouseFilter from './filters/HouseFilter';
import CharacterFilter from './filters/CharacterFilter';
import CharacterList from './pages/CharacterList';
import '../styles/layout/_landing.scss';

function Landing({ filteredCharacters, houseFilter, handleChangeHouse, searchInput, handleChangeCharacterFilter }) {


    return (
        <>
            <section className='landing'>
                <CharacterFilter
                    searchInput={searchInput}
                    handleChangeCharacterFilter={handleChangeCharacterFilter} />
                <HouseFilter
                    houseFilter={houseFilter}
                    handleChangeHouse={handleChangeHouse} />
            </section>
            <section className='landing'>
                <CharacterList
                    characters={filteredCharacters}
                    searchWord={searchInput}
                />
            </section>
        </>

    )
}
Landing.propTypes = {
    characters: PropTypes.array.isRequired,
    searchInput: PropTypes.string.isRequired,
    houseFilter: PropTypes.string.isRequired,
    filteredCharacters: PropTypes.array.isRequired,
    handleChangeHouse: PropTypes.func.isRequired,
    handleChangeCharacterFilter: PropTypes.func.isRequired
};

export default Landing;