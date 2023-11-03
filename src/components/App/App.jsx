import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Header from '../Header/Header.jsx';
import RecipeDisplay from '../RecipeDisplay/RecipeDisplay.jsx';
import Footer from '../Footer/Footer.jsx';

function App () {

  // Variables
    const [cookBook, setCookBook] = useState([]);

  // GET request - /cookBook
  function getCookBook() {
    axios.get('/cookBook').then((response) => {
      console.log(`GET /cookBook success:`, response.data);

      setCookBook(response.data);

    }).catch((error) => {
      console.log('GET Error /cookBook');
      alert(`GET error /cookBook`);
    });
  }

    // Function Call
    useEffect(() => {
      getCookBook();
    }, []);



  
  return (
    <div id="web-display">
      <Header />

      <RecipeDisplay 
          cookBook={cookBook}
      /> 

      <Footer />

    </div>
  );

}

export default App
