import React, { useState } from "react";
import "../styles/Home.css";
import Pra from "../components/Pra.tsx";
import AppBar from "../components/AppBar/AppBar.jsx";
import Dropdown from "../components/Dropdown/Dropdown.jsx";
import SearchBox from "../components/SearchBox/SearchBox.jsx";
import CardList from "../components/CardList/CardList.jsx";
import DateTime from "../components/DateTime/DateTime.jsx";
import Popup from "../components/Popup/Popup.jsx";
import usePopup from "../hooks/usePopup.js";
//import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


function Home() {
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
       <h1>Aplicacion</h1>
       <Dropdown />
       <h2>Search Example</h2>
       <SearchBox placeHolder={"Search fruits...."} data={sampleData} />
       <div>
        <h2>Card List Example</h2>
        <CardList data={cardData} horizontal={true}/>
        <h2>Date Time</h2>
        <DateTime />
       </div>
       <h2>Pop up</h2>
       <button onClick={openPopup}>Open Popup</button>
       <Popup isOpen={isPopupOpen} onClose={closePopup}>
          <h2>Popup title</h2>
          <p>This is content of popup</p>
       </Popup>
       <h1>AAA</h1>
    </div>
    /*<div>
      <Pra />
    </div>*/
  );
}

export default Home;