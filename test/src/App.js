import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductsContainer from './components/ProductsContainer';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <ProductsContainer></ProductsContainer>
      </div>
    );
  }
 
}

export default App;
