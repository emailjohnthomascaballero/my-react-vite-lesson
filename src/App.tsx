import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increment() {
    // setCount(count + 1) // you can use this method too.
    setCount((prevCount) => prevCount + 1) // or you can use this method too & this is recommended.
  }

  // every component render useEffect will run.
  useEffect(() => {
    console.log(`count: ${count}`)
  }, [count]);

  return (
    <div>
      <button onClick={increment}>Increment {count}</button>
    </div>
  )
}

export default App
