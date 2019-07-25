import React from "react";
import "./Style.css";

function NavBar(props){
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="navbar-brand" href="">
                            CLICKY GAME
                        </a>
                    </li>
                </ul>
                
                <ul className="navbar-nav ml-auto">
                    <li className="navbar-text">
                        Score:
                         {props.score}    |
                        Top Score: 
                         {props.topScore}
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;