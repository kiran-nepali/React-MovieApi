import React from 'react';
import './App.css';
import SearchMovie from './SearchMovie';

class App extends React.Component {
  render(){
    return (
      <div className="container">
        <header >
          <h1 className="title">Movie Search </h1>
        </header>
        <SearchMovie/>
      </div>
    );
  }
  
}

export default App;
