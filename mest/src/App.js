import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent'
import Header from './Header'
import NavBar from './NavBar'


function App (){
  return(
    <div>
    <FirstComponent/>
    <Header/>
       <p>Hello World</p>
       <p><NavBar/></p>
    </div>

  );
}

export default App;
