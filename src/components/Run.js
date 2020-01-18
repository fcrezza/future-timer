import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import PropTypes from 'prop-types'
import {AppValue} from '../context/AppContext'
import Title from './Header/Title'
import TimeInputLabel from './TimeInput/TimeInputLabel'
import TimerBtn from './TimerBtn'
import {getEndTime} from '../utils/getEndTime'
import Box from './Box'
import back from '../assets/back.svg'
import pause from '../assets/pause.svg'
import play from '../assets/play.svg'
import repeat from '../assets/repeat.svg'

const StyledRun = styled.div`
  margin: 150px 0 0;
  text-align: center;

  .box-group {
    display: flex;
    justify-content: center;
    margin: 40px 0;

    > :not(:first-child) {
      margin-left: 35px;
    }
  }

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    button:not(:first-child) {
      margin-left: 20px;
    }

    img {
      display: block;
      width: 80%;
    }
  }
`

const Run = ({handleTogglePlay}) => {
  const history = useHistory()
  const {timer} = AppValue()
  const [runTimer, setRunTimer] = useState({...timer})
  const [stopTimer, setStopTimer] = useState(false)
  const {hour, minute, second} = runTimer

  const now = getEndTime(hour, minute, second) - new Date().getTime()
  const getHour = Math.floor(
    (now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  ).toString()
  const getMinute = Math.floor(
    (now % (1000 * 60 * 60)) / (1000 * 60)
  ).toString()
  const getSecond = Math.floor((now % (1000 * 60)) / 1000).toString()

  const handleClose = () => {
    history.replace('/')
  }

  const toggleAction = () => {
    setStopTimer(prev => !prev)
  }

  const reset = () => {
    setRunTimer({...timer})
    setStopTimer(false)
  }

  useEffect(() => {
    let endTimer
    if (now < 1) {
      endTimer = setTimeout(() => {
        handleTogglePlay()
        handleClose()
      }, 1000)
    }

    return () => {
      clearTimeout(endTimer)
    }
    //eslint-disable-next-line
  }, [now])

  useEffect(() => {
    if (!stopTimer) {
      var myInt = setInterval(() => {
        setRunTimer({hour: getHour, minute: getMinute, second: getSecond})
      }, 1000)
    }

    return () => {
      clearInterval(myInt)
    }
    //eslint-disable-next-line
  }, [runTimer, getHour, getMinute, getSecond, stopTimer])

  return (
    <StyledRun>
      <Title>Future Timer</Title>
      <div className="box-group">
        <div>
          <Box>{hour || 0}</Box>
          <TimeInputLabel>JAM</TimeInputLabel>
        </div>
        <div>
          <Box>{minute || 0}</Box>
          <TimeInputLabel>MENIT</TimeInputLabel>
        </div>
        <div>
          <Box>{second || 0}</Box>
          <TimeInputLabel>DETIK</TimeInputLabel>
        </div>
      </div>
      <div className="wrapper">
        <TimerBtn onClick={handleClose}>
          <img src={back} alt="" />
        </TimerBtn>
        <TimerBtn onClick={toggleAction}>
          <img src={stopTimer ? play : pause} alt="" />
        </TimerBtn>
        <TimerBtn onClick={reset}>
          <img src={repeat} alt="" />
        </TimerBtn>
      </div>
    </StyledRun>
  )
}

export default Run

Run.propTypes = {
  handleTogglePlay: PropTypes.func
}
