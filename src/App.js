import React from 'react';
import './App.css';
import axios from 'axios';
import ImageContainer from './imagecontainer/ImageContainer';
import PaginationButtons from './paginationButton/paginationButtons';


class App extends React.Component {
  state = {
    imageArr: [],
    startIndex: 0,
    limit: 5
  }
  componentDidMount() {
    this.getImageData();
  }

  getImageData = () => {
    const stateData = this.state;
    const imgUrl = `https://jsonplaceholder.typicode.com/photos?_start=${stateData.startIndex}&_limit=${stateData.limit}`;
    axios.get(imgUrl).then((resp) => {
      this.setState({ imageArr: resp.data })
    }).catch(err => {
      console.log(err.message)
      this.setState({ imageArr: [] })
    });
  }

  prevButtonHandler = () => {
    const stateData = this.state;
    const newStartIndex = stateData.startIndex - stateData.limit;
    this.setState({ startIndex: newStartIndex }, this.getImageData);
  }

  nextButtonHandler = () => {
    const stateData = this.state;
    const newStartIndex = stateData.startIndex + stateData.limit;
    this.setState({ startIndex: newStartIndex }, this.getImageData);
  }

  render() {
    const { imageArr, startIndex } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h4>Image Pagination APP !</h4>
        </header>
        <section>
          {imageArr?.length >= 0 ? <ImageContainer imageArr={imageArr} /> : null}
        </section>
        <section className="buttonHolder">
          <PaginationButtons prevButtonHandler={this.prevButtonHandler} nextButtonHandler={this.nextButtonHandler} startIndex={startIndex} />
        </section>
      </div>
    )
  }
}


export default App;
