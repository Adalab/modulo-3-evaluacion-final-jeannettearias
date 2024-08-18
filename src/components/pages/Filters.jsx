import '../../styles/layout/_filters.scss'

function Filters({ houseFilter, handleChangeHouse }) {

    //events and functions
    const handleChangeGenderFilter = (ev) => {
        handleChangeHouse(ev.currentTarget.value);

    };
    return (
        <>

            <section className='filter__section'>
                <form className='form'>
                    <div>
                        <label className='form__label'>Selecciona la casa: </label>
                        <select className='form__select'
                            name="house" id="house"
                            onChange={handleChangeGenderFilter}
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

export default Filters;