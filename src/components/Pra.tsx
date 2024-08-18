import React from "react";
import "./st.css"
function Pra() {
  return (
        <nav className="Nav">
        <div className="Nc">
            <h1 className="tl"> Tienda completamente real </h1>
            <a href="#mn" className="Nm">
                <span className="material-symbols-outlined Sim">menu</span>
            </a>
            <a href="#" className="Nm Waza">
                <span className="material-symbols-outlined Sim">close</span>
            </a>
            <ul className="Ac" id="mn">
                <li className="Waz">
                    <a href="#" className="W_L">
                    <span className="material-symbols-outlined">home</span>
                    <span className="W_S">Inicio</span>
                    </a>
                </li>
                <li className="Waz">
                    <a href="#" className="W_L">
                    <span className="material-icons W_AR">arrow_right</span>
                    <span>Categorias</span>
                    <input type="checkbox" className="W_Ch"/>
                    </a>
                    <div className="W_Coo">
                        <ul className="W_sub">
                            <li className="W_li">
                                <a href="#" className="W_Ca">Cateforia 1</a>
                            </li>
                            <li className="W_li">
                                <a href="#" className="W_Ca">Cateforia 2</a>
                            </li>
                            <li className="W_li">
                                <a href="#" className="W_Ca">Cateforia 3</a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        </nav>
  )
}
export default Pra;