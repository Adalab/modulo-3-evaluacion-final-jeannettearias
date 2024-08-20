import PropTypes from 'prop-types';

import HouseFilter from './filters/HouseFilter';
import CharacterFilter from './filters/CharacterFilter';
import CharacterList from './pages/CharacterList';

function Landing({ filteredCharacters, houseFilter, handleChangeHouse, searchInput, handleChangeCharacterFilter }) {


    return (
        <>
            <section>
                <CharacterFilter
                    searchInput={searchInput}
                    handleChangeCharacterFilter={handleChangeCharacterFilter} />
                <HouseFilter
                    houseFilter={houseFilter}
                    handleChangeHouse={handleChangeHouse} />
            </section>
            <section className='characters'>
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