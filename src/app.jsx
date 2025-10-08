import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';
import { Nav } from 'react-bootstrap';

// We import app.css. Then we have this function which defines App, which will be used in index.jsx.
export default function App() {
// Note that we are just pulling this header stuff from login.html
    return (

        <BrowserRouter>
            <div className="body bg-dark text-light">
                <header className="container-fluid">
                    <nav className="navbar fixed-top navbar-dark">
                        <div className="navbar-brand">
                            Simon<sup>&reg;</sup>
                        </div>
                        <menu className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="play">Play</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="scores">Scores</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="about">About</NavLink>
                            </li>
                        </menu>
                        </nav>
                </header>

                <Routes>
                    <Route path="/" element={<Login />} exact />
                    <Route path="/play" element={<Play />} />
                    <Route path="/scores" element={<Scores />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>

                <footer class="bg-dark text-white-50">
                    <div class="container-fluid">
                        <span class="text-reset">Author Name(s)</span>
                        <a class="text-reset" href="https://github.com/webprogramming260/simon-css">Source</a>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
}

function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}