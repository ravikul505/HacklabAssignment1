import * as React from 'react';
import { render } from 'react-dom';
import Red from './components/Red'
import Yellow from './components/Yellow'
import Green from './components/Green'
import './styles.css';

function App() {
  return (<div className='hello'>
    <Red />
    <Green />
    <Yellow />

  </div >
  )
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
