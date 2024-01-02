import React from 'react'
import {createPortal} from 'react-dom';

const Modals = ({children}) => {
  const modalRoot = document.getElementById('modal');

  return (
    createPortal(<div className='modal-content'>{children}</div>, modalRoot)
  )
}

export default Modals
