import React from 'react'

import { fetchViewMoreData } from '../../constants'


import './viewMore.css'
import VIEWIMAGE from '../../assets/coffee-cup.png'

const { VIEWMORE } = fetchViewMoreData

export const ViewMore: React.FC = () =>
  <div className="view-more">
    <img src={VIEWIMAGE} alt="View More" />
    <h3 className="view-more_text">{ VIEWMORE }</h3>
  </div>
