import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, 
    Routes,
    Route} 
    from 'react-router-dom';
import { Forms } from '../components/Form';
import { List } from '../components/List';
import { Navbar } from '../components/Navbar';

export const AppRouter = () => {
    return (
        <div>
            <Router>
            <Navbar/>
                <Routes>
                    <Route exact path="/Registro" element={<Forms/>}/>
                    <Route exact path="/Listar" element={<List/>}/>
                </Routes>
            </Router>
        </div>
    )
}
