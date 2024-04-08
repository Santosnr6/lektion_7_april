import './App.css';
import Joke from './components/joke/Joke';
import SearchForm from './components/searchForm/SearchForm';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const getJokes = (input, category, setJokes) => {
  axios.get(`https://v2.jokeapi.dev/joke/${category}?blacklistFlags=religious,racist,sexist,explicit&type=single&amount=10&contains=${input}`)
    .then(response => {
      const jokes = response.data.jokes;
      setJokes([]);
      if(jokes) {
        jokes.map(joke => setJokes(j => [...j, joke]));
      }
    })
    .catch(error => console.log(error));


}

function App() {
  const [jokes, setJokes] = useState([]);
  const [input, setInput] = useState('');
  const [category, setCategory] = useState('Any');

  useEffect(() => {
    getJokes(input, category, setJokes);
  }, [input, category]);

  const handleInput = (event) => {
    setInput(event.target.value);
  }

  const handleCategory = (event) => {
    setCategory(event.target.value);
  }

  return (
    <div className="app">
      <SearchForm 
        handleInput={ handleInput }
        handleCategory={ handleCategory }
      />
      {
        
        jokes.map((joke, index) => {
          return <Joke 
                     joke={ joke }
                     key={ index }
                     index={ index + 1 }
                 />
        })
      }
    </div>
  )
}

export default App;
