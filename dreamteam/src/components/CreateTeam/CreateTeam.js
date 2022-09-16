import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import Client from '../../services/api'
import './createteam.css'

const CreateTeam = ({ user }) => {
  const navigate = useNavigate()

  const initialFormState = {
    user: user,
    name: ''
  }

  const [formValues, setFormValues] = useState(initialFormState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await Client.post(`/team/new`, formValues)
    navigate(`/teams`)
  }

  return (
    <div id="dashboard">
      <div id="form">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="createTeamForm">
            <div id="teamInner">
              <label htmlFor="title">Team: </label>
              <input
                id="name"
                type="text"
                placeholder="Enter the team name here"
                value={formValues.name}
                onChange={handleChange}
              />
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
