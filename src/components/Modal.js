import {useEffect} from 'react'
import {createPortal} from 'react-dom'
import PropTypes from 'prop-types'

const modalRoot = document.getElementById('modal-root')
const modalContainer = document.createElement('modalContainer')

const Modal = ({children}) => {
  useEffect(() => {
    modalRoot.appendChild(modalContainer)

    return () => {
      modalRoot.removeChild(modalContainer)
    }
  }, [])

  return createPortal(children, modalContainer)
}

export default Modal

Modal.propTypes = {
  children: PropTypes.node
}
