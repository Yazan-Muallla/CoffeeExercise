import React from 'react'

import { Coffee } from '../../constants'
import { GridCard } from '../GridCard'

import './gridSection.css'

interface GridSectionProps {
  deleted: { [key: string]: boolean }
  items: Coffee[]
  setDeleted: (arg: any) => void
}

export const GridSection: React.FC<GridSectionProps> = ({ deleted, items, setDeleted }) =>
  <div className="gridItems">
    {items.map((item) =>
      <GridCard
        checked={item.checked}
        description={item.description}
        id={item.id}
        imageUrl={item.imageUrl}
        key={item.id}
        name={item.name}
        setChecked={(val: boolean) => {
          setDeleted({ ...deleted, [item.id]: val })
          console.log(deleted)
        }}
      />
    )}
  </div>