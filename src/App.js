import React from 'react';
import './App.css';
import FoodCard from './components/FoodCard'
import Heading from './components/Heading'
import SignUp from './components/SignUp'
import About from './components/About'
import Post from './components/Post'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading title="Augsburg Food Call"/>
      </header>
      <div>
        <FoodCard name="Penne Pasta" postedBy="moen2" description="leftover pasta after catering event" location="Sci123" imgSrc="/assets/sandwich-2301387_640.jpg" imgAlt="pasta"/>
        <FoodCard name="Cookies" postedBy="stottrb" description="only oatmeal raisin" location="Sci123" imgSrc="/assets/sandwich-2301387_640.jpg" imgAlt="cookies"/>
        <FoodCard name="Sandwiches" postedBy="eli_sam" description="from jimmy john's" location="Sci123" imgSrc="/assets/sandwich-2301387_640.jpg" imgAlt="sandwiches"/>
        <FoodCard name="Ice Cream" postedBy="vivi" description="melting" location="Sci123" imgSrc="/assets/sandwich-2301387_640.jpg" imgAlt="ice cream"/>
      </div>
      <div>
        <About />
        <SignUp />
        <Post />
      </div>
    </div>
  );
}

export default App;
