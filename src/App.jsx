import { useState } from 'react'
import './App.css'
import { Coffee } from './Coffee/pages/Coffee'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Coffee />
      </div>
    </>
  )
}

export default App
