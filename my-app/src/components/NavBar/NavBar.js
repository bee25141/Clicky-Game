import React from "react";
import "./Style.css";

function NavBar(props){
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <ul>
                    <li className="nav-item">
                        <a className="navbar-brand" href="">
                            CLICKY GAME
                        </a>
                    </li>

                    <li className="nav-item">
                        Click on an image to get started!
                    </li>

                    <li className="nav-item">
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