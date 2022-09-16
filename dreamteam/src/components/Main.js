import '../css/home.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useNavigate } from 'react-router-dom'
const Main = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useSelector((state) => state.userProfile)
  return (
    <div className="main">
      <button
        className="main_btn"
        onClick={() => {
          isAuthenticated ? navigate('/dashboard') : navigate('/account')
        }}
      >
        Create your own team <ArrowForwardIosIcon />
      </button>
    </div>
  )
}

export default Main
