import React from 'react'
import ReactDOM from 'react-dom';
import Main from './components/main';

function Header(){
const myElement = (
  <table>
  <tr>
    <th>Name</th>
  </tr>
  <tr>
    <td>John</td>
  </tr>
  <tr>
    <td>Elsa</td>
  </tr>
  </table>
);

ReactDOM.render(myElement, document.getElementById('root'));
}

export default Header
