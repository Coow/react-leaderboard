import React from 'react';
import {
    Route,
    BrowserRouter
} from "react-router-dom";

import './App.css';

import { useSelector } from 'react-redux';

//Components
import Header from './Components/Header';
import Footer from './Components/Footer';

//Pages
import Home from './Pages/Home'
import Callback from './Pages/Callback'
import Leaderboard from './Pages/Leaderboard'
import API from './Pages/API'
import Commands from './Pages/Commands'
import FAQ from './Pages/FAQ'
import Premium from './Pages/Premium'
import Todo from './Pages/Todo'


function App() {
    const user = useSelector(state => state.user);

    return (
        
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <React.Fragment>
                <Header />
                <main role='main' className="content flex-shrink-0">
                    <Route exact path="/" component={Home} />
                    <Route path="/callback" component={Callback} />
                    <Route path="/commands" component={Commands} />
                    <Route path="/FAQ" component={FAQ} />
                    <Route path="/api" component={API} />
                    <Route path="/todo" component={Todo} />
                    <Route path="/premium" component={Premium} />
                    <Route path="/leaderboard/:guildID/:board" component={Leaderboard} />
                </main>
                <Footer />
            </React.Fragment>
        </BrowserRouter>
    );
}

export default App;