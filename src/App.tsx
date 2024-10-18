import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increment() {
    // setCount(count + 1) // you can use this method too.
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <div>
      <button onClick={increment}>Increment {count}</button>
    </div>
  )
}

export default App
