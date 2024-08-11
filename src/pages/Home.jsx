import React, { useState } from "react";
import AppBar from "../components/AppBar/AppBar.jsx";
import Dropdown from "../components/Dropdown/Dropdown.jsx";
//import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  return (
    <div>
       <h1>Aplicacion</h1>
       <Dropdown />
    </div>
  );
}

export default Home;