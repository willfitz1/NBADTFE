import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Client from '../../services/api'
import { useParams } from 'react-router'

const Teams = ({ user, authenticated, teams, setTeams }) => {
  let navigate = useNavigate()
  const goToTeamDetails = (id) => {
    navigate(`/teamdetails/${id}`)
  }

  const getTeams = async () => {
    const res = await Client.get(`http://localhost:3001/api/team/all`)
    setTeams(res.data)
    console.log(res.data)
  }

  const handleDelete = async (id) => {
    await Client.delete(`/team/${id}`)
    console.log('team deleted')
    getTeams()
  }

  useEffect(() => {
    getTeams()
  }, [user])

  return (
    <div className="team-grid">
      {teams?.map((team, index) => (
        <div className="team-card" key={team._id}>
          <h3>{team.name}</h3>
          <button onClick={() => goToTeamDetails(team._id)} id="viewTeam">
            View Team
          </button>
          <button onClick={() => handleDelete(team._id)}>Delete Team</button>
        </div>
      ))}
    </div>
  )
}

export default Teams
