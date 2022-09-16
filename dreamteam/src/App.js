import { useState } from 'react'
import { Route, Routes } from 'react-router'
// import Navbar from './components/Nav'
import React from 'react'
import Register from './components/Register'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <Navbar
          authenticated={authenticated}
          user={user}
          handleLogOut={handleLogOut}
        /> */}
      </header>
      <main>
        <Routes>
          {/* <SignIn setUser={setUser} toggleAuthenticated={toggleAuthenticated} /> */}
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
