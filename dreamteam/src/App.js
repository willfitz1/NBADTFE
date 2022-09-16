import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import { CheckSession } from './services/auth'
import Nav from './components/Nav/Nav'
import React from 'react'
import Register from './components/Register/Register'
import SignIn from './components/Signin/Signin'
import Home from './components/Home/Home'
import CreatePlayer from './components/CreatePlayer/CreatePlayer'
import CreateTeam from './components/CreateTeam/CreateTeam'
import Teams from './components/Teams/Teams'
import TeamDetails from './components/TeamDetails/TeamDetails'
import './styles/app.css'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Nav
          authenticated={authenticated}
          user={user}
          handleLogOut={handleLogOut}
        />
      </header>
      <main>
        <Routes>
          <Route
            path="/signin"
            element={
              <SignIn
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/teams"
            element={<Teams user={user} authenticated={authenticated} />}
          />
          <Route
            path="/"
            element={<Home user={user} authenticated={authenticated} />}
          />
          <Route
            path="/createteam"
            element={<CreateTeam user={user} authenticated={authenticated} />}
          />
          <Route
            path="/createplayer"
            element={<CreatePlayer user={user} authenticated={authenticated} />}
          />
          <Route
            path="/teamdetails/:id"
            element={<TeamDetails user={user} authenticated={authenticated} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
