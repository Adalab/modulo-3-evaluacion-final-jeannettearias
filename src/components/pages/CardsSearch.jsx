import '../../styles/layout/_cardsSearch.scss';

function CardsSearch() {

    //global variables



    //code when the page load


    //Search events and functions



    //HTML code
    return (
        <>
            <section className="search__section">
                <form className='form__section'>
                    <div>
                        <label className='form__label'>Busca por Personaje: </label>
                        <input className='form__input' type="text" name="search" id="search" />
                    </div>
                </form>
            </section>
        </>

    );
}

export default CardsSearch;