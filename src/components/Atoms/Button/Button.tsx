import React from 'react';

import './Button.css'

export enum ButtonVariant {
  Add = 'addBtn',
  Delete = 'deleteBtn',
  Edit = 'editBtn'
}

interface Props {
  buttonName: string
  clickHandler: () => void
  variant: ButtonVariant
}

export const Button: React.FC<Props> = ({ buttonName, clickHandler, variant = ButtonVariant.Add }) =>
  <button onClick={clickHandler} className={variant}>{ buttonName }</button>
