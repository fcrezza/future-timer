import React, {createContext, useState, useEffect, useContext} from 'react'

const appValueContext = createContext()
const appUpdaterContext = createContext()

const AppProvider = ({children}) => {
  const [timer, setTimer] = useState({hour: '', minute: '', second: ''})
  const [lists, setLists] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('listItem'))
    if (data) {
      setLists(data)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('listItem', JSON.stringify(lists))
  }, [lists])

  const handleRemoveList = id => {
    const filteredLists = lists.filter(list => list.id !== id)
    setLists(filteredLists)
  }

  const handleChange = (id, value) => {
    setTimer(prevTimer => ({...prevTimer, [id]: value}))
  }

  const handleSetTimer = data => {
    setTimer(data)
  }

  const handleSetList = (newLists, value) => {
    setLists([...newLists, value])
  }

  return (
    <appValueContext.Provider value={{lists, timer}}>
      <appUpdaterContext.Provider
        value={{handleChange, handleSetList, handleSetTimer, handleRemoveList}}
      >
        {children}
      </appUpdaterContext.Provider>
    </appValueContext.Provider>
  )
}

const AppValue = () => {
  const value = useContext(appValueContext)
  if (!value) {
    throw new Error("you don't use context")
  }
  const {lists, timer} = value

  return {lists, timer}
}

const AppUpdater = () => {
  const updater = useContext(appUpdaterContext)

  if (!updater) {
    throw new Error("you don't use context")
  }

  const {
    handleChange,
    handleSetList,
    handleSetTimer,
    handleRemoveList
  } = updater

  return {handleChange, handleSetList, handleSetTimer, handleRemoveList}
}

export {AppProvider, AppValue, AppUpdater}
