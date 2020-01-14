import React, {useContext} from 'react'
import styled from 'styled-components'
import {ItemContext} from '../context/ItemContext'
import Items from './Item/Items'
import ActionForm from './FormInput/ActionForm'
import EditBtn from './EditBtn'

const StyledListItem = styled.div`
  margin-top: 50px;

  .edit-btn {
    text-decoration: none;
    color: #2100ec;
  }
`

const ListItem = () => {
  const {open, edit, handleToggleEdit} = useContext(ItemContext)
  return (
    <StyledListItem>
      <EditBtn color="#2100ec" onClick={handleToggleEdit}>
        {edit ? 'Batal' : 'Edit'}
      </EditBtn>
      <Items />
      {open && <ActionForm />}
    </StyledListItem>
  )
}

export default ListItem
