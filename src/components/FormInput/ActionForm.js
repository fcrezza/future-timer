import React, {useState, useEffect, useContext} from 'react'
import styled from 'styled-components'
import {AppContext} from '../../context/AppContext'
import {ItemContext} from '../../context/ItemContext'
import getId from '../../utils/getId'
import CloseBtn from './CloseBtn'
import FormInput from './FormInput'
import FormInputLabel from './FormInputLabel'
import TimeInputGroup from '..//TimeInput/TimeInputGroup'
import TimeInput from '..//TimeInput/TimeInput'
import TimeInputLabel from '..//TimeInput/TimeInputLabel'
import Button from '../Button'
import {isEmpty} from '../../utils/isEmpty'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;

  form {
    position: absolute;
    max-width: 460px;
    background-color: #f1f1f1;
    padding: 16px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .wrapper {
    margin-top: 60px;
  }

  .row {
    margin: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const ActionForm = () => {
  const {lists, handleSetList} = useContext(AppContext)
  const {editData, handleEditData, handleSetOpen} = useContext(ItemContext)
  const id = getId(editData, lists)
  const [value, setValue] = useState({
    id,
    name: '',
    duration: {
      hour: '',
      minute: '',
      second: ''
    }
  })
  const {hour, minute, second} = value.duration
  const timeData = [
    {id: 'hour', text: 'Jam', value: hour},
    {id: 'minute', text: 'Menit', value: minute},
    {id: 'second', text: 'Detik', value: second}
  ]

  useEffect(() => {
    if (Object.keys(editData).length > 0) {
      setValue({...value, ...editData})
    }

    return () => {
      handleEditData({})
      handleSetOpen()
    }
  }, [])

  function handleSetValue(id, e) {
    setValue({
      ...value,
      duration: {
        ...value.duration,
        [id]: e
      }
    })
  }

  function handleChange(e) {
    setValue({...value, name: e})
  }

  function handleSubmit() {
    const newLists = lists.filter(list => list.id !== value.id)
    handleSetList(newLists, value)
    setValue({
      ...value,
      name: '',
      duration: {hour: '', minute: '', second: ''}
    })
    handleSetOpen()
  }

  return (
    <Overlay>
      <form onSubmit={handleSubmit}>
        <CloseBtn handleClick={handleSetOpen} />
        <div className="wrapper">
          <div className="row">
            <FormInputLabel id="name">Label:</FormInputLabel>
            <FormInput
              id="name"
              value={value.name}
              onChange={e => handleChange(e.target.value)}
            />
          </div>
          <div className="row">
            {timeData.map((time, id) => (
              <TimeInputGroup key={id}>
                <TimeInput
                  id={time.id}
                  value={time.value}
                  onChange={e => handleSetValue(time.id, e.target.value)}
                />
                <TimeInputLabel id={time.id}>{time.text}</TimeInputLabel>
              </TimeInputGroup>
            ))}
          </div>
        </div>
        <Button onClick={handleSubmit} disabled={isEmpty(value.duration)}>
          Simpan
        </Button>
      </form>
    </Overlay>
  )
}

export default ActionForm
