/*React - It is a java script library - designed by Facebook.
It is used to build UI, reusability components, inside js we use html
JSX - java script X- XML(extensible mark up language)
components - a piece of UI types ( functional and classic)
props - read only properties 
*/
/* Another concept is state management */
Example:
App.jsx:
import React from 'react';

export function App(props) {
  return (
    <div className='App'>
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
// Log to console
console.log('Hello console')
index.js:
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App.jsx'

ReactDOM.createRoot( 
  document.querySelector('#root')
).render(<App />)
Output :
Hello React.
Start editing to see some magic happen! (This is basic one)
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Example:
App.jsx:
import React from 'react';

export function App() {
  return <h1>Hello from App</h1>;
}

export function M1(props) {
  return <p>Name: {props.name}</p>;
}

export function M2(props) {
  return <p>Age: {props.age}</p>;
}
index.js:
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App, M1, M2 } from './App.jsx'

ReactDOM.createRoot( 
  document.querySelector('#root')
).render(
  <>
  <App />)
  <M1 name="saii" />
  <M2 age ="20" />
  </>
  );
Output:
Hello from App
)
Name: saii

Age: 20
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Example :
App.jsx:
import React, { useRef, useState } from 'react'
import Confetti from 'js-confetti'
import './style.css'

const confetti = new Confetti()

const App = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    confetti.addConfetti()
    setCount(c => c + 1)
  }
  
  return (
    <button className="btn" onClick={handleClick}>
      <span role="img" aria-label="react-emoji">⚛️</span> {count}
    </button>
  )
}


export default App 
index.js:
import App from './App.jsx'
import React from 'react'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(App)
  )
)
this is for the count uodation

