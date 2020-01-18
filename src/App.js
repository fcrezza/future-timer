import React, {useState, useEffect, useRef} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import {Switch, Route, useLocation, Redirect} from 'react-router-dom'
import {animated, useTransition} from 'react-spring'
import {AppValue} from './context/AppContext'
import Start from './components/Start'
import Run from './components/Run'
import {isEmpty} from './utils/isEmpty'
import alarm from './assets/alarm.mp3'
import 'typeface-poppins'

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box
  }

  body {
    margin: 0;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    background: #f8f8f8;
  }
`

const Container = styled(animated.div)`
  width: 100%;
  max-width: 520px;
  padding: 0 1.5rem;
  margin: 0 auto;

  p {
    text-align: center;
  }
`

const App = () => {
  const [isPlaying, togglePlay] = useState(false)
  const {timer} = AppValue()
  const audio = useRef(null)
  const location = useLocation()
  const transitions = useTransition(location, location => location.pathname, {
    from: {
      transform: 'translateY(50px)',
      opacity: 0
    },
    enter: {transform: 'translateY(0)', opacity: 1},
    leave: {display: 'none'}
  })

  useEffect(() => {
    let myTimo
    if (isPlaying) {
      myTimo = setTimeout(() => {
        audio.current.play()
      }, 2000)
    }

    return () => {
      clearTimeout(myTimo)
    }
  }, [isPlaying])

  const handleTogglePlay = () => {
    togglePlay(prevState => !prevState)
  }

  return (
    <>
      <GlobalStyle />
      <audio ref={audio} src={alarm} onEnded={handleTogglePlay}></audio>
      {transitions.map(({item, key, props}) => (
        <Container key={key} style={props}>
          <Switch>
            <Route exact path="/">
              <Start isPlaying={isPlaying} />
            </Route>
            <Route path="/run">
              {isEmpty(timer) ? (
                <Redirect to="/" />
              ) : (
                <Run handleTogglePlay={handleTogglePlay} />
              )}
            </Route>
          </Switch>
        </Container>
      ))}
    </>
  )
}

export default App
