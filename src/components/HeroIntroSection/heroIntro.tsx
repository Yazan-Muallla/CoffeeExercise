import React from 'react'

import { featuredSectionStrings } from '../../constants'

import './heroIntro.css'

const { CONTENT, MAIN_TITLE, SUBTITLE, TOPPACK } = featuredSectionStrings

export const HeroIntro: React.FC = () =>
  <div className="textBanner">
    <p className="title">{SUBTITLE}</p>
    <p className="subTitle">{MAIN_TITLE}</p>
    <p className="paragraph">
      {CONTENT}
    </p>
    <p className="pack">{TOPPACK}</p>
  </div>
