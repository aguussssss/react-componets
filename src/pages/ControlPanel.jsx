import React, {useState} from 'react';
import SizedBox from '../components/SizedBox/SizedBox.jsx';
import SearchBox from '../components/SearchBox/SearchBox.jsx';
import AppBar from '../components/AppBar/AppBar.jsx';
import Sidebar from '../components/SideBar/Sidebar.jsx';
import BarChart from '../components/BarChart/BarChart.jsx';
import DoughnutChart from '../components/DoughnutChart/DoughnutChart.jsx';
import '../styles/ControlPanel.css';

function ControlPanel(){
    const [isSidebarOpen, setSidebarOpen] = useState(true);
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

    return (
      <div>
        <AppBar 
          toggleSidebar={toggleSidebar} 
          content={(
            <div className="searchBox">
              <SizedBox width={"0%"} />
              <SearchBox data={sampleData}/>
           </div>)}
          contentRight={(
            <a a href="/">
              <button className="e-commerce">
                E-commerce
              </button>
            </a>
          )}
        />
        <div className="content">
            <div className="content-left">a</div>
            <div className="content-right">
                <div className="content-right-sales">
                    <div className="stadistics-text">Stadistics</div>
                    <div>
                        
                    </div>
                    <div className="bar-chart"><BarChart /></div>
                    <div></div>
                </div>
                <div className="content-right-metrics">
                    <div></div>
                    <div className="doughnut-chart">
                        Top categories
                        <DoughnutChart/>
                    </div>
                </div>
            </div>
        </div>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
    );
}

export default ControlPanel;