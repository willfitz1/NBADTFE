import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import Client from '../../services/api'
import './createplayer.css'
import { useParams } from 'react-router'

const CreatePlayer = ({ player }) => {
  const navigate = useNavigate()

  let { id } = useParams()

  const initialFormState = {
    player: player,
    name: '',
    age: '',
    position: '',
    number: ''
  }

  const [formValues, setFormValues] = useState(initialFormState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await Client.post(`/player/new/${id}`, formValues)
    navigate(`/teams`)
  }

  return (
    <div id="dashboard">
      <div id="form">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="createPlayerForm">
            <div id="teamInner">
              <div>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter the player name here"
                  value={formValues.name}
                  onChange={handleChange}
                />
                <input
                  id="age"
                  type="number"
                  placeholder="Enter the player age here"
                  value={formValues.age}
                  onChange={handleChange}
                />
                <input
                  id="position"
                  type="text"
                  placeholder="Enter the player position here"
                  value={formValues.position}
                  onChange={handleChange}
                />
                <input
                  id="number"
                  type="number"
                  placeholder="Enter the player number here"
                  value={formValues.number}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button id="form-submit">Create Player</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePlayer
