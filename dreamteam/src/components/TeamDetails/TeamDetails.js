import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Client from '../../services/api'
import { useParams } from 'react-router'

const TeamDetails = ({ user, authenticated }) => {
  const [players, setPlayers] = useState([])

  let { id } = useParams()

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
        </div>
      ))}
    </div>
  )
}

export default TeamDetails
