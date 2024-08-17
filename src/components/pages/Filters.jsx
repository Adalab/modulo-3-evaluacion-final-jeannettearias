import '../../styles/layout/_filters.scss'


function Filters() {

    return (
        <section className='filter__section'>
            <form >
                <fieldset>
                    <div>
                        <label className='form__label'>Busca por Personaje: </label>
                        <input type="text" name="search" id="search" />
                    </div>
                    <div>
                        <label className='form__label'>Selecciona la casa: </label>
                        <select className='house__select' name="house" id="house">
                            <option className='filter__house' value="Gryffindor">Gryffindor</option>
                            <option className='filter__house' value="Slytherin">Slytherin</option>
                            <option className='filter__house' value="Ravenclaw">Ravenclaw</option>
                            <option className='filter__house' value="Hufflepuff">Hufflepuff</option>
                        </select>
                    </div>
                </fieldset>
            </form>
        </section>


    );
}

export default Filters;