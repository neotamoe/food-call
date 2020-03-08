import React from 'react';
import './App.css';
import FoodCard from './components/FoodCard'
import Heading from './components/Heading'
import SignUp from './components/SignUp'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading title="Augsburg Food Call"/>
      </header>
      <div>
        <FoodCard name="Penne Pasta"/>
        <FoodCard name="Cookies"/>
        <FoodCard name="Sandwiches"/>
        <FoodCard name="Ice Cream"/>
      </div>
      <div>
        <SignUp />
      </div>
    </div>
  );
}

export default App;
