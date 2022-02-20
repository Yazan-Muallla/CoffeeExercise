import React from 'react'

import { Coffee } from '../../constants'
import { GridCard } from '../GridCard'
import { HeroIntro } from '../HeroIntroSection'
import { ViewMore } from '../ViewMore'

import './featuredItemsSection.css'

interface props {
  featuredItems: Coffee[]
}

// use state/ use effect
export const FeaturedItemsSection: React.FC<props> = ({ featuredItems }) => {
  const [heroItem, ...restOfItems] = featuredItems

  return (
    <div className="heroSection">
      <GridCard description={heroItem.description} id={heroItem.id} imageUrl={heroItem.imageUrl} isHero name={heroItem.name} />
      <div className="heroBanner">
        <HeroIntro />
        <div className="flexItems">
          {restOfItems.map(({ description, id, imageUrl, name }) =>
            <GridCard key={id} description={description} id={id} imageUrl={imageUrl} name={name} isFlex/>
          )}
          <ViewMore />
        </div>
      </div>
    </div>
  )
}
