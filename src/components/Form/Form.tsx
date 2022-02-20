import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

import { fetchFormData } from '../../constants';
import { addMutation } from '../../api/AddCoffee/addCoffeemutation';


import './Form.css'
import { Toast } from '../Toast';
import { ApollosUri } from '../../api';


const { SUBTITLE, TITLE, UPLOADIMAGES, SUBMIT } = fetchFormData
const uri = `${ApollosUri}upload`
const options = { headers: { 'Access-Control-Allow-Origin': '*' } }

export const Form: React.FC = () => {
  const history = useHistory()
  const [file, setFileValue] = useState<FormData>()
  const [showToast, setShowToast] = useState<boolean>(false)
  const [subTitle, setSubTitleValue] = useState('')
  const [title, setTitleValue] = useState('')
  const [toastMessage, setToastMessage] = useState<string>('')

  const handleSubmit = async () => {
    try {

      const { data } = await axios.post(uri, file, options)
      const imgUrl = `${ApollosUri}${data}`

      await addMutation(title, subTitle, imgUrl)
      history.push('/')

    } catch(error:any) {

      setToastMessage(error.message)
      setShowToast(true)

    }
  }

  useEffect(() => {
    if(showToast) {
      setTimeout(() => setShowToast(false), 3000)
    }
  }, [showToast])

  const handleUpload = async ({ target: { files, value } }: any) => {
    const [file] = files;

    const formData = new FormData()
    formData.append('avatar', file)

    setFileValue(formData)
  }

  return (
    <>
      <Toast message={toastMessage} show={showToast} />
      <div className="formCountaner">
        <div className="form" >
          <label htmlFor="titleInput"> {TITLE} </label>
          <input className='fieldInput' id="titleInput" type="text" name="title" value={title} onChange={e => setTitleValue(e.target.value)} />
          <label htmlFor="subTitleInput"> {SUBTITLE} </label>
          <input className='fieldInput' id="subTitleInput" type="text" name="subTitle" value={subTitle} onChange={e => setSubTitleValue(e.target.value)} />
          <label htmlFor="avatarInput">{UPLOADIMAGES}</label>
          <input className='fieldUpload' type="file" id="avatarInput" name="avatar" onChange={handleUpload}></input>
          <button disabled={!title || !subTitle || !file} onClick={handleSubmit} className='fieldInput' type="submit" value="Submit" > {SUBMIT} </button>
        </div>
      </div>
    </>
  )
}
