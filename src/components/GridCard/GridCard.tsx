import React from 'react'

import { fetchHeroData } from '../../constants'
import { useHistory } from 'react-router-dom'


import './gridCard.css'
import HeroImage from '../../assets/MOCHALATE.png'
import { Button, ButtonVariant } from '../Atoms/Button'

interface CardProps {
  checked?: boolean
  description: string
  id: string
  imageUrl: string
  isFlex?: boolean
  isHero?: boolean
  key?: string
  name: string
  setChecked?: (val: boolean) => void
}



const { AMOUNT, PRICE } = fetchHeroData

export const GridCard: React.FC<CardProps> = ({ checked = false, description, id, imageUrl, isFlex = false, isHero = false, name, setChecked = () => { } }) => {

  let history = useHistory()

  const onEditHandler = () => {
    history.push('/form')
  }

  return (
    <div>
      <div key={id} id={id} className={`cardContainer ${isHero ? 'heroItem' : ''}`}>
        {
          (isHero || isFlex) || <input type="checkbox" name="" value={checked ? 'checked' : ''} onChange={(e) => setChecked(e.target.checked)} />
        }
        <div className="flexItemImage">
          <img src={isHero ? HeroImage : imageUrl} className="flexImageBg" alt="Moka Coffee" />
        </div>
        <div className="flexItemText">
          <h2 className="flexTextTitle">{name}</h2>
          <p className="flexTextDesc">{description}</p>
          {isHero && <div className="heroTextPrice">
            <span>{AMOUNT}</span>
            <span>{PRICE}</span>
          </div>
          }
        </div>
      </div>
      {(isHero || isFlex) ||
        <div className='btnCenter'>
          <Button clickHandler={onEditHandler} variant={ButtonVariant.Edit} buttonName="Edit" />
        </div>
      }

    </div>
  )
}