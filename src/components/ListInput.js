import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import TimeInputGroup from './TimeInput/TimeInputGroup'
import TimeInput from './TimeInput/TimeInput'
import TimeInputLabel from './TimeInput/TimeInputLabel'

const Wrapper = styled.div`
  margin-top: 55px;
  display: flex;
  justify-content: center;
`

const ListInput = ({timer, onChange}) => {
  const {hour, minute, second} = timer
  const timeData = [
    {id: 'hour', text: 'Jam', value: hour},
    {id: 'minute', text: 'Menit', value: minute},
    {id: 'second', text: 'Detik', value: second}
  ]

  return (
    <Wrapper>
      {timeData.map((time, id) => (
        <TimeInputGroup key={id}>
          <TimeInput
            id={time.id}
            value={time.value}
            onChange={e => onChange(time.id, e.target.value)}
          />
          <TimeInputLabel id={time.id}>{time.text}</TimeInputLabel>
        </TimeInputGroup>
      ))}
    </Wrapper>
  )
}

export default ListInput

ListInput.propTypes = {
  timer: PropTypes.object,
  onChange: PropTypes.func
}
