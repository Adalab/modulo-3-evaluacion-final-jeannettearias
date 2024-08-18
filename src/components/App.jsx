import '../styles/App.scss';
import '../styles/layout/_header.scss';
import Header from './layout/Header';
import Filters from './pages/Filters';
import CharacterList from './pages/CharacterList';
import CharacterDetail from './pages/CharacterDetail';
import CardsSearch from './pages/CardsSearch';
import Footer from './layout/Footer';

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function App() {

  //global variables
  const [characters, setCharacters] = useState([]);


  //code when the page load



  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then(response => response.json())
      .then(responseData => {

        console.log(responseData);
        setCharacters(responseData);

      });
  }, []);

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

App.propTypes = {
  characters: PropTypes.array.isRequired
};

export default App;
