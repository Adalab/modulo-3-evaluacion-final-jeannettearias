import '../../styles/layout/_filters.scss'

function Filters() {

    //global variables



    //code when the page load


    //events and functions



    //HTML code
    return (
        <section className='filter__section'>
            <form className='form'>
                <div>
                    <label className='form__label'>Selecciona la casa: </label>
                    <select className='form__select' name="house" id="house">
                        <option className='filter__house' value="Gryffindor">Gryffindor</option>
                        <option className='filter__house' value="Slytherin">Slytherin</option>
                        <option className='filter__house' value="Ravenclaw">Ravenclaw</option>
                        <option className='filter__house' value="Hufflepuff">Hufflepuff</option>
                    </select>
                </div>
            </form>
        </section>
    );
}

export default Filters;