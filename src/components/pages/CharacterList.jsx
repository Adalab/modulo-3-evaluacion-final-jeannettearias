
import CharacterCard from "./CharacterCard";

function CharacterList({ characters }) {

    //global variables


    //code when the page load


    //events and functions


    //HTML code
    return (

        <section>
            <ul className='cards' >
                {characters.map((character) => (
                    <li key={character.id} className="card">
                        <CharacterCard character={character} />
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default CharacterList;