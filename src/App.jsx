
import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Status } from './Components/Status'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
      <Navbar />
      <Status></Status>
    </div>
  )
}

export default App