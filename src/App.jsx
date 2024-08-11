import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import Home from "./pages/Home.jsx";
import AppBar from "./components/AppBar/AppBar.jsx";
import Sidebar from "./components/SideBar/Sidebar.jsx";
import TabBar from "./components/TabBar/TabBar.jsx";
import useIsMobile from './hooks/useIsMobile.js';
import "./App.css";

function App(){
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const isMobile = useIsMobile;
    
    const toggleSidebar = () => {
        //alert('¡Me hiciste click!');
        setSidebarOpen(!isSidebarOpen);
    };
    
    return (
        <div className="App">
            <AppBar toggleSidebar={toggleSidebar}/>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Routes>
                <Route path= "/" element= { <Home/>} />
                <Route path= "/"/>
                <Route path= "/"/>
            </Routes>
            {isMobile && <TabBar />}
        </div>
    );
}
export default App;