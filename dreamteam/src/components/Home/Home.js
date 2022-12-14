import './home.css'
import { useNavigate } from 'react-router'

const Home = () => {
  let navigate = useNavigate

  return (
    <div id="homeContent">
      <h1>
        Welcome to 'Build a Team', an app where you create your own players and
        add them to your own teams.
      </h1>
    </div>
  )
}

export default Home
