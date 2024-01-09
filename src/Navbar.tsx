/*
    1. Enable users to navigate between different functions of the web app
    2. Functions: profile, show & edit articles, read & comment on the articles, create & Upload new articles.
    3. Headers: Home, Profile, Create, My Content, Show
*/
import React from "react";

export default function Navbar(){
    return (
    <div className="container-fluid">
    <nav className="navbar navbar-expand-sm justify-content-center bg-warning navbar-light">
        
            <a className="navbar-brand" href="#">
            
            </a>
            
            <div className="navbar-toggler" data-bs-toggle="dropdown" data-bs-target="#collapsibleNavbar" aria-controls="collapsibleNavbar">
                <div className="collapsibleNavbar text-white">
                    <a className="dropdown-item" href="#">Home</a>
                    <a className="dropdown-item" href="#">About</a>
                    <a className="dropdown-item" href="#create">CREATE</a>
                    <a className="dropdown-item" href="#show">SHOW</a>
                    <a className="dropdown-item" href="#logout">Log out</a>
                </div>
            </div>
            

            <div className="collapse navbar-collapse text-danger" id="collapsibleNavbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">Home</a>
                </li>

                <li className="nav-item">
                <a className="nav-link" href="#">About</a>
                </li>

                <li className="nav-item">
                <a className="nav-link" href="#create">CREATE</a>
                </li>

                <li className="nav-item">
                <a className="nav-link" href="#show">SHOW</a>
                </li>

                <li className="nav-item">
                <a className="nav-link" href="#logout">LOG OUT</a>
                </li>
            </ul>
        </div>
    </nav>
    </div>
    );
}