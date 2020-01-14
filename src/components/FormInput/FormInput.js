import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledInput = styled.input`
  width: 85%;
  height: 40px;
  border: 1px solid #c1c1c1;
  border-radius: 4px;
  font-size: 1.1rem;
  padding: 0 8px;
  outline: none;
`

const FormInput = ({id, onChange, value}) => (
  <StyledInput type="text" id={id} value={value} onChange={onChange} />
)

export default FormInput

FormInput.propTypes = {
  value: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func
}
