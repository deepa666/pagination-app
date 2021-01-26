import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ImageContainer from './imagecontainer/ImageContainer';
import PaginationButtons from './paginationButton/paginationButtons';
function App() {
  const [limit, setLimit] = useState(5);
  const [startIndex, setStartIndex] = useState(0)
  const [imageArr, setImageArr] = useState([]);

  useEffect(() => {
    async function getImageData() {
      try {
        const imgUrl = `https://jsonplaceholder.typicode.com/photos?_start=${startIndex}&_limit=${limit}`;
        const response = await axios.get(imgUrl);
        setImageArr(response.data);
      } catch (err) {
        console.error(err.message)
      }
    }
    getImageData();
  }, [startIndex])
  const prevButtonHandler = () => {
    const newStartIndex = startIndex - limit;
    setStartIndex(newStartIndex);
  }
  const nextButtonHandler = () => {
    const newStartIndex = startIndex + limit;
    setStartIndex(newStartIndex);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h4>Image Pagination APP !!!</h4>
      </header>
      <section>
        <ImageContainer imageArr={imageArr} />
      </section>
      <section className="buttonHolder">
        <PaginationButtons prevButtonHandler={prevButtonHandler} nextButtonHandler={nextButtonHandler} startIndex={startIndex} />
      </section>
    </div>
  );
}

export default App;
