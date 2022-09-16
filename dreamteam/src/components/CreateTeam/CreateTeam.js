import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import Client from '../../services/api'
import PopUp from '../Popup/Popup'
import './createteam.css'

const CreateTeam = ({ user, authenticated }) => {
  const navigate = useNavigate()
  const [team, setTeam] = useState([])
  const [usersTeam, setUsersTeam] = useState([])
  const [name, setName] = useState('')
  const [post, setPost] = useState(false)

  const navigateRegister = () => {
    navigate('/register')
  }

  const navigateSignin = () => {
    navigate('/signin')
  }

  const createteam = async (e) => {
    if (name) {
      const res = await Client.post(`/team/${user.id}`, {
        name: name
      })
      setName('')
      let tempArray = [...team]
      let tempObj = { ...res.data, isEdit: false, isHover: false, ogUser: true }
      tempArray.push(tempObj)
      setTeam(tempArray)
      setPost(false)
    }
  }
  const changeName = (event) => {
    let n = event.target.value
    setName(n)
    if (name) {
      setPost(true)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    createteam(e)
  }

  return user && authenticated ? (
    <div id="dashboard">
      <div id="form">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="createPlaylistForm">
            <div id="playlistInner">
              <div>
                <input
                  className="playlistFromInput"
                  type="text"
                  value={name}
                  onChange={changeName}
                  name={'name'}
                  placeholder={'Playlist'}
                  id="createPlaylistName"
                  maxlength="15"
                  required
                />
              </div>
              <div>
                <button id="form-submit">Create Playlist</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <div>
      <PopUp
        content={
          <div id="popup">
            <div id="register">
              <h4>
                Ready to make your own team? Come on down and sign up and let's
                get started!{' '}
              </h4>
              <button onClick={navigateRegister} className="popUpButtons">
                Sign Up
              </button>
            </div>
            <div id="SignIn">
              <h4>Already have an account?</h4>
              <button onClick={navigateSignin} className="popUpButtons">
                Sign In
              </button>
            </div>
          </div>
        }
      />
    </div>
  )
}

export default CreateTeam
