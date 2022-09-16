import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Client from '../../services/api'

const Teams = (props) => {
  const [teams, setTeams] = useState([])

  let navigate = useNavigate

  useEffect(() => {
    const getTeams = async () => {
      const res = await axios.get(`http://localhost:3001/api/team/all`)
      setTeams(res.data)
    }
    getTeams()
  }, [])

  const handleDelete = async (id) => {
    await Client.delete(`/team/${id}`)
    console.log('banaana')
    props.getTeams()
  }

  return (
    <div className="team-grid">
      {teams?.map((team, index) => (
        <div className="team-card" key={team._id}>
          <h3>{team.name}</h3>
          <button onClick={() => handleDelete(team._id)}>Delete Team</button>
        </div>
      ))}
    </div>
  )
}

export default Teams
