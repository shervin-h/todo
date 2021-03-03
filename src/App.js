import React, {Component} from "react"
import store from "./stores";
import {observer} from "mobx-react";
import TodoEntry from "./components/TodoEntry";
import TodoItems from "./components/TodoItems";
import Snowfall from 'react-snowfall'

import logo from './logo.svg';
import './App.css';

@observer
class App extends Component {
    render() {
        return (
            <div className="App">

                <Snowfall/>

                <div className="my-app">
                    <div className="clock-area">
                        <img src={logo} className="App-logo" alt="logo" width={100} height={100}/>
                        <div>
                            {store.time.toLocaleTimeString()}
                        </div>
                        <div style={{margin: "8px"}}>
                            <button
                                className="clock"
                                onClick={
                                    () => {
                                        store.pauseClock()
                                    }
                                }>
                                Pause
                            </button>
                            <button
                                className="clock"
                                onClick={
                                    () => {
                                        store.startClock()
                                    }
                                }>
                                Start
                            </button>
                        </div>
                    </div>
                </div>

                <div id="todoapp" className="todoapp">
                    <TodoEntry/>
                    <TodoItems/>
                </div>

                <div className="father">
                    <p className="glow fa-text">جهت شادی روح مرحوم‌ مغفور، جانباز سرافراز محمد حسن حسن زاده صلوات</p>
                </div>

            </div>
        );
    }
}

export default App;
