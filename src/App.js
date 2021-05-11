import React from 'react';
import {
    Route,
    NavLink,
    BrowserRouter
} from "react-router-dom";

import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { signIn } from './Actions';

//Components
import Header from './Components/Header';
import Footer from './Components/Footer';

//Pages
import Home from './Pages/Home'
import Callback from './Pages/Callback'


function App() {
    const user = useSelector(state => state.user);

    return (
        
        <BrowserRouter>
            <React.Fragment>
                <Header />
                <main role='main' className="content flex-shrink-0">
                    <Route exact path="/" component={Home} />
                    <Route path="/callback" component={Callback} />
                </main>
                <Footer />
            </React.Fragment>
        </BrowserRouter>
    );
}

export default App;