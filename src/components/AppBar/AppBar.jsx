import React from "react";
import "./AppBar.css"

function AppBar({ toggleSidebar }){
    function onClick(){
        alert('¡Me hiciste click!');
      }
    return (
    <div className="appBarStyle">
        <div className="menuButtonStyle" onClick={toggleSidebar}>
            &#9776;
            {/* Icono de menú de hamburguesa */}
        </div> 
      <div className="titleStyle">Mi App</div>
    </div>
    );
}

export default AppBar;