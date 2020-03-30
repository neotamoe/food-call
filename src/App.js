import React from 'react';
import './App.css';
import FoodCard from './components/FoodCard'
import Heading from './components/Heading'
import SignUp from './components/SignUp'
import About from './components/About'
import Post from './components/Post'
import Grid from '@material-ui/core/Grid'
import Footer from './components/Footer'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#660033'
    },
    secondary: {
      main: '#666666'
    },
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Heading title="Augsburg Food Call"/>
      <Grid container>
        <FoodCard name="Penne Pasta" postedBy="moen2" description="leftover pasta after catering event" location="Sci123" imgSrc="/assets/sandwich-2301387_640.jpg" />
        <FoodCard name="Cookies" postedBy="stottrb" description="only oatmeal raisin" location="Sci123" imgSrc="/assets/spaghetti.jpg" />
        <FoodCard name="Sandwiches" postedBy="eli_sam" description="from jimmy john's" location="Sci123" imgSrc="/assets/sandwich-2301387_640.jpg" />
        <FoodCard name="Ice Cream" postedBy="vivi" description="melting" location="Sci123" imgSrc="/assets/spaghetti.jpg" />
      </Grid>
      <Grid container>
        <SignUp />
        <Post />
      </Grid>
      <Footer>
        <Grid container>
          <About />
        </Grid>
      </Footer>
    </div>
    </ThemeProvider>
  );
}

export default App;
