import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar';


function App() {
    return (
        <div>
            <Router>
                <Navbar />

                    <Route exact path='/' component={Home} />
                    <Route path='/contact' component={Contact} />

            </Router>
        </div>
    );
}

export default App;
