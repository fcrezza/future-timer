import React, {createContext, useState, useMemo} from 'react'

export const ItemContext = createContext()

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

  const values = useMemo(
    () => ({
      handleSetOpen,
      handleToggleEdit,
      handleEditData,
      editData,
      edit,
      open
    }),
    [editData, open, edit]
  )

  return <ItemContext.Provider value={values}>{children}</ItemContext.Provider>
}

export default ItemProvider
