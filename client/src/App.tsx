import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Register } from './pages/Register'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Main } from './pages/Main'

import "./main.css"

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
