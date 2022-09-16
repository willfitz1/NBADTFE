import { useNavigate } from 'react-router'

const Teams = ({ team }) => {
  // let navigate = useNavigate

  return (
    <div className="latest-jobs-grid">
      {team?.map((team) => (
        <div className="team-card" key={team._id}>
          <h1>hello</h1>
          <h2>{team.name}</h2>
          {/* <h3>players: {Team.salary}</h3> */}
        </div>
      ))}
    </div>
  )
}

export default Teams
