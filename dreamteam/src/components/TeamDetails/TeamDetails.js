import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Client from '../../services/api'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

const TeamDetails = ({ user, authenticated, teams }) => {
  const [players, setPlayers] = useState([])
  const [name, setName] = useState([])
  const [age, setAge] = useState([])
  const [position, setPosition] = useState([])
  const [number, setNumber] = useState([])

  let { id, index } = useParams()

  const navigate = useNavigate()

  const initialFormState = {
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
  }

  const getPlayers = async () => {
    const res = await Client.get(`http://localhost:3001/api/player/${id}`)
    setPlayers(res.data)
    console.log(res.data)
  }
  useEffect(() => {
    getPlayers()
  }, [user])

  const handleDelete = async (id) => {
    await Client.delete(`/player/${id}`)
    console.log('player deleted')
    getPlayers()
  }

  return (
    <div>
      <div className="team-grid">
        {players.players?.map((player, index) => (
          <div className="team-card" key={player._id}>
            <h3>{player.name}</h3>
            <h3>{player.age}</h3>
            <h3>{player.position}</h3>
            <h3>{player.number}</h3>
            <button onClick={() => handleDelete(player._id)}>
              Delete Player
            </button>
            <Link to={`/teamDetails/${id}/${player._id}/editplayer`}>
              <button>Update Player</button>
            </Link>
          </div>
        ))}
      </div>
      <Link to={`/teamDetails/${id}/createplayer`}>
        <button>Add Player</button>
      </Link>
    </div>
  )
}

export default TeamDetails
