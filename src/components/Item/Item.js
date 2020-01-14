import React, {useContext} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {device} from '../../utils/device'
import {AppContext} from '../../context/AppContext'
import {ItemContext} from '../../context/ItemContext'
import ItemName from './ItemName'
import ItemImg from './ItemImg'
import ItemDuration from './ItemDuration'
import ItemLink from './ItemLink'
import Overlay from './Overlay'
import RemoveBtn from './RemoveBtn'
import EditBtn from '../EditBtn'

const StyledItem = styled.div`
  text-align: center;
  border-radius: 5px;
  border: 1px solid #c1c1c1;
  background-color: #e5e5e5;
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 10px 15px;

  @media ${device.mobileL} {
    height: 120px;
  }
`

export const AddItem = styled(StyledItem)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
  color: #2100ec;

  @media ${device.mobileL} {
    font-size: 1.7rem;
  }
`

const Item = ({list}) => {
  const {edit, handleEditData} = useContext(ItemContext)
  const {handleRemoveList, handleSetTimer} = useContext(AppContext)

  const {duration, id} = list
  const {hour, minute, second} = duration
  let textDuration = ''

  if (hour > 0) {
    textDuration += `${hour} Jam `
  } else if (minute > 0) {
    textDuration += `${minute} Menit `
  } else if (second > 0) {
    textDuration += `${second} Detik`
  }

  return (
    <StyledItem>
      <ItemImg />
      <ItemName>{list.name}</ItemName>
      {!edit ? (
        <>
          <ItemDuration>{textDuration}</ItemDuration>
          <ItemLink
            handleClick={() => handleSetTimer({hour, minute, second})}
          />
        </>
      ) : (
        <>
          <Overlay />
          <RemoveBtn handleClick={() => handleRemoveList(id)} />
          <EditBtn color="#e02272" onClick={() => handleEditData(list)}>
            Edit
          </EditBtn>
        </>
      )}
    </StyledItem>
  )
}

export default Item

Item.propTypes = {
  list: PropTypes.object
}
