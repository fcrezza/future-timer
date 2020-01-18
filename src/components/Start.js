import React from 'react'
import {useHistory} from 'react-router-dom'
import PropTypes from 'prop-types'
import {AppValue} from '../context/AppContext'
import {AppUpdater} from '../context/AppContext'
import {ItemProvider} from '../context/ItemContext'
import Header from './Header/Header'
import ListInput from './ListInput'
import ListItem from './ListItem'
import Button from './Button'
import {isEmpty} from '../utils/isEmpty'

const Start = ({isPlaying}) => {
  const {timer} = AppValue()
  const {handleChange} = AppUpdater()
  const history = useHistory()

  const handleSubmit = () => {
    history.replace('/run')
  }

  return (
    <>
      {isPlaying && <p>Berdering...</p>}
      <Header />
      <ListInput timer={timer} onChange={handleChange} />
      <ItemProvider>
        <ListItem />
      </ItemProvider>
      <Button onClick={handleSubmit} disabled={isEmpty(timer) || isPlaying}>
        Mulai
      </Button>
    </>
  )
}

export default Start

Start.propTypes = {
  isPlaying: PropTypes.bool
}
