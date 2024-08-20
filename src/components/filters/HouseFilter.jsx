import '../../styles/layout/_filters.scss';
import PropTypes from 'prop-types';


function HouseFilter({ houseFilter, handleChangeHouse }) {

    //events and functions
    const handleChangeHouseFilter = (ev) => {
        handleChangeHouse(ev.currentTarget.value);

    };

    return (
        <>
            <section className='filter__section'>
                <form className='form'>
                    <div>
                        <label className='form__label'>Selecciona la casa: </label>
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
                    </div>
                </form>
            </section>
        </>
    );
}
HouseFilter.propTypes = {
    houseFilter: PropTypes.string.isRequired,
    handleChangeHouse: PropTypes.func.isRequired,
};
export default HouseFilter;