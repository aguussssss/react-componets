import React, { useEffect, useRef, useState } from 'react'
import "./carrue.css"
import { data } from '../images/data.js';

export const Carru = () => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth"
      });
    }

  }, [currentIndex]);


  const scrollToImage = (direction) => {
    if (direction === 'prev') {
      setCurrentIndex(curr => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? 0 : curr - 1;
      })
    } else {
      const isLastSlide = currentIndex === data.length - 1;
      if (!isLastSlide) {
        setCurrentIndex(curr => curr + 1);
      }
    }
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <div className="main-container">
      <div className="slider-container">
        <span class="material-symbols-outlined leftArrow" onClick={() => scrollToImage('prev')}>chevron_left</span>
        <span class="material-symbols-outlined rightArrow" onClick={() => scrollToImage('next')}>chevron_right</span>
        <div className="container-images">
          <ul ref={listRef}>
            {
              data.map((item) => {
                return <li key={item.id}>
                  <img src={item.imgUrl} width={1000} height={280} />
                </li>
              })
            }
          </ul>
        </div>
      </div>
    </div >
  )
}
