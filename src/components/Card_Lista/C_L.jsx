import React, { useEffect, useRef, useState } from 'react'
import "./C_LE.css"
import { data } from '../images/data.js';

export const C_L = () => {
  
  return (
    <div className="main-c">
      <div className='slider-c'>      
            {data.map((item) => {
                return <div className='container-i'>
              <li key={item.id}>
              <img src={item.imgUrl} width={200} height={280} />
              </li>
              </div>
            })
            }
      </div>
    </div>
  )
}