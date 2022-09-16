import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import Client from '../../services/api'
import './createplayer.css'

const CreatePlayer = ({ user, authenticated }) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [position, setPosition] = useState('')
  const [number, setNumber] = useState('')

  const [player, setPlayer] = useState([])
  const [post, setPost] = useState(false)

  const createplayer = async (e) => {
    if (name) {
      const res = await Client.post(`/team/${user._id}`, {
        name: name,
        age: age,
        position: position,
        number: number
      })
      setName('')
      let tempArray = [...player]
      let tempObj = { ...res.data, isEdit: false, isHover: false, ogUser: true }
      tempArray.push(tempObj)
      setPlayer(tempArray)
      setPost(false)
    }
  }
  const changeName = (event) => {
    let n = event.target.value
    setName(n)
    if (name) {
      setPost(true)
    }
  }
  const changeAge = (event) => {
    let n = event.target.value
    setAge(n)
    if (age) {
      setPost(true)
    }
  }
  const changePosition = (event) => {
    let n = event.target.value
    setPosition(n)
  }
  const changeNumber = (event) => {
    let n = event.target.value
    setNumber(n)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    createplayer(e)
  }

  return (
    <div id="dashboard">
      <div id="form">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="createPlayerForm">
            <div id="teamInner">
              <div>
                <input
                  className="teamFromInput"
                  type="text"
                  value={name}
                  onChange={changeName}
                  name={'name'}
                  placeholder={'Player Name'}
                  id="createPlayerName"
                  maxLength="15"
                  required
                />
                <input
                  className="teamFromInput"
                  type="text"
                  value={age}
                  onChange={changeAge}
                  name={'age'}
                  placeholder={'Player Age'}
                  id="createPlayerAge"
                  maxLength="15"
                  required
                />
                <input
                  className="teamFromInput"
                  type="text"
                  value={position}
                  onChange={changePosition}
                  name={'position'}
                  placeholder={'Player Position'}
                  id="createPlayerPosition"
                  maxLength="15"
                  required
                />
                <input
                  className="teamFromInput"
                  type="text"
                  value={number}
                  onChange={changeNumber}
                  name={'number'}
                  placeholder={'Player Number'}
                  id="createPlayerNumber"
                  maxLength="15"
                  required
                />
              </div>
              <div>
                <button id="form-submit">Create Player</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePlayer
