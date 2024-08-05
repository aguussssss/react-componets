import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


function Home(){
    function onClick(){
        alert('¡Me hiciste click!');
    }

    return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon onClick= {onClick}/>
        </IconButton>
        <Typography variant="h6">
          Mi App
        </Typography>
      </Toolbar>
    </AppBar>
    );
    /*<button onClick= {onClick}>
        Hazme click
    </button>*/
};

export default Home;