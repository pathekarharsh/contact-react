import React from 'react'
import './Button.css'
//props.children to make a wrapper so that we can wrap a component

const Button = (props) => {
  return (
    <button className='button' type={props.type || 'button'} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button