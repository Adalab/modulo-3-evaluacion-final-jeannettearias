import PropTypes from 'prop-types';

import HouseFilter from './filters/HouseFilter';
import CharacterFilter from './filters/CharacterFilter';
import CharacterList from './pages/CharacterList';

function Landing({ characters, houseFilter, handleChangeHouse }) {


    return (
        <>
            <section>
                <CharacterFilter />
                <HouseFilter houseFilter={houseFilter}
                    handleChangeHouse={handleChangeHouse} />
            </section>
            <section className='characters'>
                <CharacterList characters={characters} />
            </section>
        </>
    )
}
Landing.propTypes = {
    characters: PropTypes.array.isRequired,
    houseFilter: PropTypes.string.isRequired,
    handleChangeHouse: PropTypes.func.isRequired
}

export default Landing;


