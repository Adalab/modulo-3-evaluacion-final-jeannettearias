import '../../styles/layout/_filters.scss';
import '../../styles/layout/_landing.scss';
import PropTypes from 'prop-types';

function HouseFilter({ houseFilter, handleChangeHouse }) {


    //events and functions
    const handleChangeHouseFilter = (ev) => {
        handleChangeHouse(ev.currentTarget.value);

    };

    return (
        <>
            <form className='form__width'>
                <label className='form__select__label'>Selecciona la casa: </label>
                <select className='form__select'
                    name="house"
                    id="house"
                    onChange={handleChangeHouseFilter}
                    value={houseFilter}>
                    <option className='filter__house' value="All">All</option>
                    <option className='filter__house' value="Gryffindor">Gryffindor</option>
                    <option className='filter__house' value="Slytherin">Slytherin</option>
                    <option className='filter__house' value="Ravenclaw">Ravenclaw</option>
                    <option className='filter__house' value="Hufflepuff">Hufflepuff</option>
                </select>
            </form>
        </>
    );
}
HouseFilter.propTypes = {
    houseFilter: PropTypes.string.isRequired,
    handleChangeHouse: PropTypes.func.isRequired,
};
export default HouseFilter;