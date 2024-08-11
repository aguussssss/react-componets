import React from 'react';
import './TabBar.css';

function TabBar (){
    return (
        <div className='tabBar'>
            <nav>
                <ul>
                    <li>
                        <a href="#home"><span className="material-icons">home</span> Home </a>
                    </li>
                    <li>
                        <a href="#notifications"><span className="material-icons">notifications</span> Notifications </a>
                    </li>
                    <li>
                        <a href="#search"><span className="material-icons">search</span> Search </a>
                    </li>
                    <li>
                        <a href="#profile"><span className="material-icons">person</span> Profile </a>
                    </li>
                    <li>
                        <a href="#about"><span className="material-icons">info</span> About </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default TabBar;