import React from 'react'
import styled from 'styled-components'
import {ItemValue, ItemUpdater} from '../context/ItemContext'
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
  const {open, edit} = ItemValue()
  const {handleToggleEdit} = ItemUpdater()
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
