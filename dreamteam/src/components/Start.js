import { useNavigate } from 'react-router-dom'

const Start = () => {
  let navigate = useNavigate()

  return (
    <div className="offers_container">
      <h3>You Can</h3>
      <div className="offers">
        {offers.map((offer, i) => {
          return (
            <div className="offer" key={i}>
              <img src={offer.pic} alt={offer.key} />
              <p>{offer.key}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Start
