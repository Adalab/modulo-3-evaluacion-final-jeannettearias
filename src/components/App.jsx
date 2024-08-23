import '../styles/App.scss';
import '../styles/layout/_header.scss';
import '../styles/layout/_landing.scss';
import '../styles/layout/_footer.scss';

import Header from './layout/Header';
import Landing from './Landing';
import CharacterDetail from './pages/CharacterDetail';
import Footer from './layout/Footer';

import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';


function App() {

  //global variables
  const [characters, setCharacters] = useState([]);
  const [houseFilter, setHouseFilter] = useState('Gryffindor');
  const [searchInput, setSearchInput] = useState('');

  const imageNotFound = 'https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter'

  //code when the page load
  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then(response => response.json())
      .then(responseData => {

        const processedCharacters = imageSetUp(responseData);
        setCharacters(processedCharacters);
      });

  }, []);

  //events and functions - House filter
  const handleChangeHouse = (house) => {
    setHouseFilter(house);
    let path = 'characters/house/' + house;
    if (house === 'All') {
      path = 'characters'
    }

    fetch(`https://hp-api.onrender.com/api/${path}`)
      .then((response) => response.json())
      .then((responseData) => {

        const processedCharacters = imageSetUp(responseData);

        setCharacters(processedCharacters)

      });

  }

  //events and functions - Character filter
  const handleChangeCharacterFilter = (searchInput) => {
    setSearchInput(searchInput);
  }

  //events and functions - Character Detail 
  const findCharacter = (id) => {

    const characterToShow = characters.find(
      //why have a empty space at the start?
      (character) => character.id === id.trim()
    );
    return characterToShow;
  };

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchInput.toLowerCase())
  );


  //setup functions
  const imageSetUp = (responseData) => {
    const processedCharacters = responseData.map(character => ({
      ...character,
      image: character.image ? character.image : imageNotFound
    }));
    return processedCharacters;
  }


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
            searchInput={searchInput}
            filteredCharacters={filteredCharacters}
            handleChangeCharacterFilter={handleChangeCharacterFilter}
            houseFilter={houseFilter}
            handleChangeHouse={handleChangeHouse} />}
          />
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

export default App;
