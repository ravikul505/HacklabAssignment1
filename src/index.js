import * as React from 'react';
import { render } from 'react-dom';

import './styles.css';

function App() {
  const [counter, setCounter] = React.useState(3);


  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);
  if (counter == 0) {
    console.log('a')
  }
  return (
    <div className="App">
      <button type="button" class="button1">Countdown: {counter}</button>
      <button type="button" class="button2">Countdown: {counter}</button>
      <button type="button" class="button3">Countdown: {counter}</button>
    </div>
  );
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
