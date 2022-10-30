import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthContext } from './contexts/auth'

import { Register } from './pages/Register'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Main } from './pages/Main'

import "./main.css"
import { Footer } from './components/Footer'

function App() {

  return (
    <div className="App">
      <Router>
      <AuthContext.Provider value={{}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </AuthContext.Provider>
      </Router>
      <Footer />
    </div>
  )
}

export default App
