import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home(){
    function onClick(){
        alert('¡Me hiciste click!');
    }

    return (
    <button onClick= {onClick}>
        Hazme click
    </button>
    );
};

export default Home;