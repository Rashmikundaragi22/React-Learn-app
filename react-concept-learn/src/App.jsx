import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useNavigate } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  const goToNavbar =() => {
    navigate('/navbar')
  }

  return (
    <>
      <div className="container">
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
       <button onClick={goToNavbar}>
  Press Here to enter the navigation bar
</button>
      </div>
    </>
  )
}

export default App
