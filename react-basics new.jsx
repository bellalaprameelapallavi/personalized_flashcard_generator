/*React - It is a java script library - designed by Facebook.
It is used to build UI, reusability components, inside js we use html
JSX - java script X- XML(extensible mark up language)
components - a piece of UI types ( functional and classic)
props - read only properties 
*/
/* Another concept is state management */
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
index.jsx:
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

