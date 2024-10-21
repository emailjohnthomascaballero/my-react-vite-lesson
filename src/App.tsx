import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import TestComponent from './test'

function App() {
  const [count, setCount] = useState(0)

  function increment() {
    // setCount(count + 1) // you can use this method too.
    setCount((prevCount) => prevCount + 1) // or you can use this method too & this is recommended.
  }

  // every component render useEffect will run.
  useEffect(() => {
    console.log(`I am from app component`)
  }, []);

  return (
    <div>
      <button onClick={increment}>Increment {count}</button>
      <TestComponent />
    </div>
  )
}

export default App
