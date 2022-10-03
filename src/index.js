import * as React from 'react';
import { render } from 'react-dom';

import Auto from './components/Auto'
import './styles.css';

function App() {
  return (<div className='hello'>
    <Auto />

  </div >
  )
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
