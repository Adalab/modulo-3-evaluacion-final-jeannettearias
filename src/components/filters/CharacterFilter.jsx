import '../../styles/layout/_landing.scss';
import '../../styles/layout/_filters.scss';
import PropTypes from 'prop-types';

function CharacterFilter({ searchInput, handleChangeCharacterFilter }) {

    //handle the input change
    const handleInputChange = (ev) => {
        const newValue = ev.target.value;

        //trigger the search whenever the input changes
        handleChangeCharacterFilter(newValue);

    };

    //HTML code
    return (
        <>
            <form className='form__input'>
                <div>
                    <label className='form__label'>Busca por personaje: </label>
                    <input className='form__input'
                        type="text"
                        name="search" id="search"
                        value={searchInput}
                        onChange={handleInputChange} />
                </div>
            </form>
        </>

    );
}
CharacterFilter.propTypes = {
    handleChangeCharacterFilter: PropTypes.func.isRequired,
    searchInput: PropTypes.string.isRequired,
};

export default CharacterFilter;