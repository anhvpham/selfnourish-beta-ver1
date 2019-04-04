import React, { Component } from 'react';
//import {render} from 'react-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

import { BrowserRouter, Route, Switch, NavLink, HashRouter } from "react-router-dom";


//import index from "./index.css"


import "./App.css"

import Home from "./components/pages/Home"
import Plans from "./components/pages/Plans"
import Contact from "./components/pages/Contact"
import About from "./components/pages/About"
import Condition from "./components/pages/Condition"
import Search from "./components/pages/Search"
import SingleRecipe from "./components/pages/SingleRecipe"

import Header from "./components/containers/Header"
import Footer from "./components/containers/Footer"

//custom theme color
const theme = createMuiTheme({
  typography: {
    fontFamily: ["Quicksand", "Raleway", "sans-serif"].join(","),
    fontSize: 16,
    //mobile-version
    h1: {
      fontSize: "3.75em",
      fontWeight: 400,
      lineHeight: 1.5,
      //"text-transform": "uppercase"
    },
    h2: {
      fontSize: "1.5em",
      fontWeight: 700,
      lineHeight: 1.3,
      //"text-transform": "uppercase"
    },
    h3: {
      fontSize: "1.2em",
      fontWeight: 700,
      lineHeight: 1,
    },

    body1: {
      fontSize: "1em",
      fontWeight: 400,
      lineHeight: 1.4
    },    
    body2: {
      fontSize: "1em",
      fontWeight: 400,
      lineHeight: 1.4
    },
    h5: {
      fontSize: "1.8em",
      fontWeight: 300,
      lineHeight: 1.5,
      fontFamily:"Raleway"
    },
    useNextVariants: true
  },
  palette: {
    primary: {
      main: "#ff8500",
      light: "ffab48",
      contrastText: "black"
    },
    secondary: {
      main: "#90d200",
      light: "b8ef40",
      contrastext: "#fff"
    },
  },
  overrides: {
    MuiButton: {
      // override root styles for the button component.
      root: {
        // Name of the rule
        borderRadius: 50,
        "text-transform": "capitalize",
        fontSize: 12,
      }
    }
  }
})



class App extends React.Component {
  render() {
    return (
     
      <MuiThemeProvider theme={theme}>
         <div className="App">
        
            <BrowserRouter>
            <div>
              <Header />
            
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path="/Recipes/Search/:nutrientConstraints" component={Search}/>
									<Route path="/Recipes/single/:recipeId/:nutrientConstraints/:searchIngredient?" component={SingleRecipe}/>
                  <Route path="/Recipes" component={Condition}/>
                  <Route path='/Contact' component={Contact}/>
                  <Route path='/Plans' component={Plans} />
                  <Route path='/About Us' component={About} />
                  

                </Switch>
            
              <Footer />           
                </div>

            </BrowserRouter>



          
        </div>
      </MuiThemeProvider>
     
    );
  }
}

export default App
