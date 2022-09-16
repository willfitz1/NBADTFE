import { useNavigate, useParams } from 'react-router'
import Client from '../../services/api'
import { useState } from 'react'

const EditPlayer = () => {
  let navigate = useNavigate()
  let { team_id, player_id } = useParams()

  const initialState = {
    team: team_id,
    name: '',
    age: '',
    position: '',
    number: ''
  }

  const [playerValues, setPlayerValues] = useState(initialState)

  const handleChange = (e) => {
    setPlayerValues({ ...playerValues, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await Client.put(`/player/${player_id}`, playerValues)
    console.log(team_id)
    navigate(`/teams`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          value={playerValues.name}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <input
          type="number"
          id="age"
          value={playerValues.age}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          id="position"
          value={playerValues.position}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <input
          type="number"
          id="number"
          value={playerValues.number}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default EditPlayer
