import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import Client from '../../services/api'
import './createteam.css'

const CreateTeam = ({ user, authenticated }) => {
  const navigate = useNavigate()
  const [team, setTeam] = useState([])
  const [usersTeam, setUsersTeam] = useState([])
  const [name, setName] = useState('')
  const [post, setPost] = useState(false)

  const createteam = async (e) => {
    if (name) {
      const res = await Client.post(`/team/${user._id}`, {
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

  return (
    <div id="dashboard">
      <div id="form">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="createTeamForm">
            <div id="teamInner">
              <div>
                <input
                  className="teamFromInput"
                  type="text"
                  value={name}
                  onChange={changeName}
                  name={'name'}
                  placeholder={'Create Team'}
                  id="createTeamName"
                  maxLength="15"
                  required
                />
              </div>
              <div>
                <button id="form-submit">Create Team</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTeam
