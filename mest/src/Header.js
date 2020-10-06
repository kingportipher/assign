import React from 'react'
import ReactDOM from 'react-dom';
import Main from './component/main';
import App from './App';


function Header(){
 return(
   <body>

  <header id="sandy"></header>

</body>
);
ReactDOM.render(<p>Hallo</p>, document.getElementById('sandy'));
}

export default Header
