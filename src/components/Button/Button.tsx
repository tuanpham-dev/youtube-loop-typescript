import React, { FunctionComponent } from 'react'
import './Button.scss'

type ButtonProps = {
  className?: string,
  color?: string
  onClick?: () => void
}

export const Button: FunctionComponent<ButtonProps> = ({ className = '', color, onClick, children }) => {
  let buttonClass = className ? className + ' button' : 'button'

  if (color) {
    buttonClass += ` button--${color}`
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button