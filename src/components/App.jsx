import '../styles/App.scss';
import '../styles/layout/_header.scss';
import Header from './layout/Header';
import Filters from './pages/Filters';
import CharacterList from './pages/CharacterList';
import CharacterDetail from './pages/CharacterDetail';
import CardsSearch from './pages/CardsSearch';
import Footer from './layout/Footer';
import CharacterCard from './pages/CharacterCard';

import { useState } from 'react';
import charactersJson from './services/characters.json';


function App() {

  //global variables
  const [characters, setCharacters] = useState(charactersJson);



  //code when the page load


  //events and functions


  //HTML code
  return (
    <>
      <header>
        <Header />
      </header>

      <main className='main'>
        <section>
          <CardsSearch />
          <Filters />

          <CharacterList characters={characters} />

        </section>
        <section>
          <CharacterDetail />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}
export default App;
