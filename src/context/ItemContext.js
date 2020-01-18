import React, {createContext, useState, useContext} from 'react'

const itemValueContext = createContext()
const itemUpdaterContext = createContext()

const ItemProvider = ({children}) => {
  const [editData, setEditData] = useState({})
  const [open, setOpen] = useState(false)
  const [edit, toggleEdit] = useState(false)

  const handleSetOpen = () => {
    setOpen(prev => !prev)
  }

  const handleEditData = data => {
    setEditData(data)
    handleSetOpen()
  }

  const handleToggleEdit = () => {
    toggleEdit(prev => !prev)
  }

  return (
    <itemValueContext.Provider value={{edit, open, editData}}>
      <itemUpdaterContext.Provider
        value={{handleSetOpen, handleToggleEdit, handleEditData}}
      >
        {children}
      </itemUpdaterContext.Provider>
    </itemValueContext.Provider>
  )
}

const ItemValue = () => {
  const value = useContext(itemValueContext)

  if (!value) {
    throw new Error("you don't use context")
  }
  const {edit, open, editData} = value

  return {edit, open, editData}
}

const ItemUpdater = () => {
  const updater = useContext(itemUpdaterContext)

  if (!updater) {
    throw new Error("you don't use context")
  }
  const {handleSetOpen, handleToggleEdit, handleEditData} = updater

  return {handleSetOpen, handleToggleEdit, handleEditData}
}

export {ItemProvider, ItemValue, ItemUpdater}
