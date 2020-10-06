import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent'
import Header from './Header'
import NavBar from './NavBar'
import NewPage from './NewPage'


function App (){


  return(
    <body >
    <FirstComponent/>
    <Header/>
    <hr/>
    <p>Hello World</p>
    <p><NavBar/></p>
    </body>

  );
}

export default App;
