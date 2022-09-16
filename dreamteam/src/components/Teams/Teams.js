import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Client from '../../services/api'

const Teams = ({ user, authenticated }) => {
  const [teams, setTeams] = useState([])

  let navigate = useNavigate

  // useEffect(() => {
  //   const getTeams = async () => {
  //     const res = await axios.get(`http://localhost:3001/api/team/all`)
  //     setTeams(res.data)
  //   }
  //   getTeams()
  // }, [user])

  const getTeams = async () => {
    const res = await Client.get(`http://localhost:3001/api/team/all`)
    setTeams(res.data)
    console.log(res.data)
  }

  useEffect(() => {
    getTeams()
  }, [user])

  const handleDelete = async (id) => {
    await Client.delete(`/team/${id}`)
    console.log('team deleted')
    getTeams()
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
