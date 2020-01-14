import React, {createContext, useState, useEffect, useMemo} from 'react'

export const AppContext = createContext()

const AppProvider = ({children}) => {
  const [timer, setTimer] = useState({hour: '', minute: '', second: ''})
  const [lists, setLists] = useState([
    {id: 1, name: 'Lari', duration: {hour: '0', minute: '30', second: '30'}},
    {id: 2, name: 'Mandi', duration: {hour: '0', minute: '5', second: '0'}}
  ])

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

  const values = useMemo(
    () => ({
      handleChange,
      handleSetTimer,
      handleRemoveList,
      handleSetList,
      lists,
      timer
    }),
    [lists, timer]
  )

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

export default AppProvider
