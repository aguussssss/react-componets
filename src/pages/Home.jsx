import React, { useState } from "react";
import useIsMobile from "../hooks/useIsMobile.js";
import usePopup from "../hooks/usePopup.js";
import "../styles/Home.css";
import Pra from "../components/Pra.tsx";
import AppBar from "../components/AppBar/AppBar.jsx";
import Sidebar from "../components/SideBar/Sidebar.jsx";
import TabBar from "../components/TabBar/TabBar.jsx";
import Dropdown from "../components/Dropdown/Dropdown.jsx";
import SearchBox from "../components/SearchBox/SearchBox.jsx";
import CardList from "../components/CardList/CardList.jsx";
import ImageList from "../components/ImageList/ImageList.jsx";
import DateTime from "../components/DateTime/DateTime.jsx";
import Popup from "../components/Popup/Popup.jsx";
//import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SizedBox from "../components/SizedBox/SizedBox.jsx";


function Home() {
  const { isPopupOpen, openPopup, closePopup } = usePopup();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile;
    
  const toggleSidebar = () => {
    //alert('¡Me hiciste click!');
    setSidebarOpen(!isSidebarOpen);
  };

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

  const imageData = [
    {
      image: 'https://via.placeholder.com/300x180.png?text=Card+1',
    },
    {
      image: 'https://via.placeholder.com/300x180.png?text=Card+2',
    },
    {
      image: 'https://via.placeholder.com/300x180.png?text=Card+3',
    },
    {
      image: 'https://via.placeholder.com/300x180.png?text=Card+4',
    },
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
      <AppBar 
        toggleSidebar={toggleSidebar} 
        content={(
        <div className="searchBox">
          <SizedBox width={"0%"} />
          <SearchBox data={sampleData}/>
        </div>)}
      />
      <div>
        <ImageList data={imageData}/>
        <div className="recently-seen">
          Visto recientemente
          <button className="btn-more">Ver mas</button>
        </div>
        <CardList horizontal={true} data={cardData}/>
      </div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {isMobile && <TabBar />}
    </div>
    /*<div>
      <Pra />
    </div>*/
  );
}

export default Home;