import React from 'react'
import styled from 'styled-components'
import {AppValue} from '../../context/AppContext'
import {ItemValue} from '../../context/ItemContext'
import {ItemUpdater} from '../../context/ItemContext'
import Item, {AddItem} from './Item'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-top: 20px;
`

const Items = () => {
  const {lists} = AppValue()
  const {edit} = ItemValue()
  const {handleSetOpen} = ItemUpdater()
  return (
    <Wrapper>
      {lists.length > 0 &&
        lists.map(list => {
          return <Item key={list.id} list={list} />
        })}
      {!edit && (
        <AddItem as="a" href="#" onClick={handleSetOpen}>
          +
        </AddItem>
      )}
    </Wrapper>
  )
}

export default Items
