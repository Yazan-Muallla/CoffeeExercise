import React from 'react'
import { fetchToastString } from '../../constants'

import './Toast.css'

interface Props {
  message: string
  show: boolean
}

const { TITLE } = fetchToastString

export const Toast: React.FC<Props> = ({ message, show }) => {
  return (
    <div className={`errorToast ${!show ? 'hide' : ''}`}>
      <span>{TITLE}</span>
      <span>{message}</span>
    </div>
  )
}
