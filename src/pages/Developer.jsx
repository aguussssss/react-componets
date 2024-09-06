import React, { useState } from "react";
import "../styles/Home.css";
import Pra from "../components/Pra.tsx";
import AppBar from "../components/AppBar/AppBar.jsx";
import Dropdown from "../components/Dropdown/Dropdown.jsx";
import SearchBox from "../components/SearchBox/SearchBox.jsx";
import CardList from "../components/CardList/CardList.jsx";
import DateTime from "../components/DateTime/DateTime.jsx";
import PopUp from "../components/PopUp/PopUp.jsx";
import usePopup from "../hooks/usePopup.js";
import PlayAudioButton from "../components/PlayAudioButton/PlayAudioButton.jsx";
import BarChart from "../components/BarChart/BarChart.jsx";
import CircularChart from "../components/CircularChart/CircularChart.jsx";
import DoughnutChart from "../components/DoughnutChart/DoughnutChart.jsx";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer.jsx"
import VideoReact from "../components/VideoReact/VideoReact.jsx"
//import AppBar from '@mui/material/AppBar';

function Developer(){
    const { isPopupOpen, openPopup, closePopup } = usePopup();

  const sampleData = [
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Pineapple',
    'Grapes',
    'Strawberry',
    'Blueberry',
    'Watermelon',
    'Papaya'
  ];

  const cardData = [
    {
      title: 'Card 1',
      subtitle: 'This is the subtitle for card 1',
      image: 'https://via.placeholder.com/300x180.png?text=Card+1',
    },
    {
      title: 'Card 2',
      subtitle: 'This is the subtitle for card 2',
      image: 'https://via.placeholder.com/300x180.png?text=Card+2',
    },
    {
      title: 'Card 3',
      subtitle: 'This is the subtitle for card 3',
      image: 'https://via.placeholder.com/300x180.png?text=Card+3',
    },
    {
      title: 'Card 4',
      subtitle: 'This is the subtitle for card 4',
      image: 'https://via.placeholder.com/300x180.png?text=Card+4',
    },
    {
      title: 'Card 5',
      subtitle: 'This is the subtitle for card 5',
      image: 'https://via.placeholder.com/300x180.png?text=Card+5',
    },
    {
      title: 'Card 6',
      subtitle: 'This is the subtitle for card 6',
      image: 'https://via.placeholder.com/300x180.png?text=Card+6',
    },
    {
      title: 'Card 7',
      subtitle: 'This is the subtitle for card 6',
      image: 'https://via.placeholder.com/300x180.png?text=Card+7',
    },
    {
      title: 'Card 8',
      subtitle: 'This is the subtitle for card 6',
      image: 'https://via.placeholder.com/300x180.png?text=Card+8',
    },
    {
      title: 'Card 9',
      subtitle: 'This is the subtitle for card 6',
      image: 'https://via.placeholder.com/300x180.png?text=Card+9',
    },
  ];

  return (
    <div>
       <h1>Developer</h1>
       <Dropdown />
       <h2>Search Example</h2>
       <SearchBox placeHolder={"Search fruits...."} data={sampleData} />
       <div>
        <h2>Card List Example</h2>
        <CardList data={cardData} horizontal={true}/>
        <h2>Date Time</h2>
        <DateTime />
       </div>
       <h2>Pop Up</h2>
       <button onClick={openPopup}>Open Popup</button>
       <PopUp 
        isOpen={isPopupOpen} 
        onClose={closePopup} 
        children={
          <div>
            <h2>PopUp title</h2>
            <p>This is content of popup</p>
          </div>
        }/>
       <h2>AAA</h2>
       <h2>Play Audio Example</h2>
       <PlayAudioButton />
       <h2>DateTime PopUp</h2>
       <button onClick={openPopup}>Open DateTime PopUp</button>
       <PopUp 
        isOpen={isPopupOpen} 
        onClose={closePopup} 
        children={
          <div>
            <h2>Popup DateTime</h2>
            <DateTime />
          </div>
        }/>
        <h2>BarChart</h2>
        <div style={{ width: '600px', margin: '0 auto' }}>
        <BarChart/>
        </div>
        <h2>CircularChart</h2>
        <div style={{ width: '600px', margin: '0 auto' }}>
        <CircularChart />
        </div>
        <h2>DoughnutChart</h2>
        <div style={{ width: '600px', margin: '0 auto' }}>
          <DoughnutChart />
        </div>
        <h2>Video Player</h2>
        <VideoPlayer/>
        <h2>React Player Video</h2>
        <VideoReact />
    </div>
    /*<div>
      <Pra />
    </div>*/
  );
}

export default Developer;