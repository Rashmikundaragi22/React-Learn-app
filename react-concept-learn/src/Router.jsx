import { Routes, Route } from 'react-router-dom'
import App from './App'
import Navbar from '../src/components/Navbar/Navbar.jsx'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/navbar" element={<Navbar />} />
    </Routes>
  )
}

export default Router