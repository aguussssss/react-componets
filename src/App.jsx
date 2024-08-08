import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";


function App(){
    return (
        <div className="App">
            <Routes>
                <Route path= "/" element= { <Home/>} />
                <Route path= "/"/>
                <Route path= "/"/>
            </Routes>
        </div>
    );
}
export default App;