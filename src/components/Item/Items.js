import React, {useContext} from 'react'
import styled from 'styled-components'
import {ItemContext} from '../../context/ItemContext'
import {AppContext} from '../../context/AppContext'
import Item, {AddItem} from './Item'
import {device} from '../../utils/device'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-top: 20px;

  @media screen and ${device.mobileL} {
    grid-template-columns: 1fr;
  }
`

const Items = () => {
  const {edit, handleSetOpen} = useContext(ItemContext)
  const {lists} = useContext(AppContext)
  return (
    <Wrapper>
      {lists.length > 0 &&
        lists.map(list => {
          return <Item key={list.id} list={list} />
        })}
      {!edit && (
        <AddItem as="a" href="javascript:void(0)" onClick={handleSetOpen}>
          +
        </AddItem>
      )}
    </Wrapper>
  )
}

export default Items
