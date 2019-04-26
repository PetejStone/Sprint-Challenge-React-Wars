import React, { Component } from 'react';
import './App.scss';
import Starwarschars from './components/Starwarschars';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      url: `https://swapi.co/api/people/`,
      nextPage: '',
     
    };
  }

  componentDidMount() {
      this.getCharacters(this.state.url)
  }

  componentDidUpdate() {
    if (this.state.nextPage === this.state.url) {
      this.getCharacters(this.state.url)
    }
  }

  nextPage = event => {
   
    this.setState({ 
      starwarsChars: [...this.state.starwarsChars],
      url: this.state.nextPage
    });
    this.componentDidUpdate();
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data)
        this.setState({ 
          starwarsChars: data.results,
          nextPage: data.next });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        
        <Starwarschars characters={this.state.starwarsChars} />
        <button className="next-button" onClick={this.nextPage}>Next Page</button>
      </div>
    );
  }
}

export default App;
