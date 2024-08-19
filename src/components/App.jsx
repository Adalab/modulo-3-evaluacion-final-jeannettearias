import '../styles/App.scss';
import '../styles/layout/_header.scss';
import Header from './layout/Header';
import CharacterDetail from './pages/CharacterDetail';
import Footer from './layout/Footer';
import PropTypes from 'prop-types'

import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './Landing';

function App() {

  //global variables
  const [characters, setCharacters] = useState([]);
  const [houseFilter, setHouseFilter] = useState('All');
  const imageNotFound = 'https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter'

  //Code if there is no imagen
  if (characters.image === undefined) {
    characters.image = imageNotFound;

  }
  //code when the page load
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
    let path = 'characters/house/' + house;
    if (house === 'All') {
      path = 'characters'
    }

    fetch(`https://hp-api.onrender.com/api/${path}`)
      .then((response) => response.json())
      .then((responseData) => {
        setCharacters(responseData);

      });

  }

  const findCharacter = (id) => {

    const characterToShow = characters.find(
      //why have a empty space at the start?
      (character) => character.id === id.trim()
    );
    return characterToShow;
  };
  console.log(houseFilter);

  //HTML code
  return (
    <>
      <header>
        <Header />
      </header>
      <main className='main'>

        <Routes>
          <Route path='/' element={<Landing
            characters={characters}
            houseFilter={houseFilter}
            handleChangeHouse={handleChangeHouse} />} />
          <Route path='/detail/:id'
            element={<CharacterDetail
              findCharacter={findCharacter} />} />
        </Routes>

      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

App.propType = {
  characters: PropTypes.array.isRequired,
  houseFilter: PropTypes.string.isRequired,
  handleChangeHouse: PropTypes.func.isRequired,
};
export default App;
