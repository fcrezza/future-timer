import React, {useState, useEffect, useRef, useContext} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import 'typeface-poppins'
import {AppContext} from './context/AppContext'
import ItemProvider from './context/ItemContext'
import Header from './components/Header'
import ListInput from './components/ListInput'
import ListItem from './components/ListItem'
import Button from './components/Button'
import alarm from './assets/alarm.mp3'
import {isEmpty} from './utils/isEmpty'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box
  }

  body {
    margin: 0;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    background: #f8f8f8;
  }
`

const Container = styled.div`
  width: 100%;
  max-width: 520px;
  padding: 0 1.5rem;
  margin: 0 auto;
  position: relative;
`

const App = () => {
  const [isPlaying, togglePlay] = useState(false)
  const audio = useRef(null)
  const {timer, handleChange} = useContext(AppContext)

  useEffect(() => {
    if (isPlaying) {
      audio.current.play()
    }
  }, [])

  const handleTogglePlay = () => {
    togglePlay(prevState => !prevState)
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <audio ref={audio} src={alarm} onEnded={handleTogglePlay}></audio>
        <Header isPlaying={isPlaying} />
        <ListInput timer={timer} onChange={handleChange} />
        <ItemProvider>
          <ListItem />
        </ItemProvider>
        <Button onClick={handleTogglePlay} disabled={isEmpty(timer)}>
          Mulai
        </Button>
      </Container>
    </>
  )
}

export default App
