import '../styles/App.scss';
import '../styles/layout/_header.scss';
import Header from './layout/Header';
import HouseFilter from './pages/HouseFilter';
import CharacterList from './pages/CharacterList';
import CharacterDetail from './pages/CharacterDetail';
import CardsSearch from './pages/CharacterFilter';
import Footer from './layout/Footer';

import { useState, useEffect } from 'react';

function App() {

  //global variables
  const [characters, setCharacters] = useState([]);
  const [houseFilter, setHouseFilter] = useState('All');
  const imageNotFound = 'https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter'


  //code when the page load

  //Code if there is no imagen
  if (characters.image === undefined) {
    characters.image = imageNotFound;

  }

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then(response => response.json())
      .then(responseData => {

        setCharacters(responseData);
      });
  }, []);

  //events and functions
  const handleChangeHouse = (house) => {
    setHouseFilter(house);

    fetch('https://hp-api.onrender.com/api/characters/house/' + house)
      .then((response) => response.json())
      .then((responseData) => {

        setCharacters(responseData);

      });
  }


  //HTML code
  return (
    <>
      <header>
        <Header />
      </header>

      <main className='main'>
        <section>
          <CardsSearch />
          <HouseFilter
            characters={characters}
            houseFilter={houseFilter}
            handleChangeHouse={handleChangeHouse} />
          <CharacterList
            characters={characters} />
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
