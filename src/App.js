import React, { Profiler } from 'react';
import './App.css';
import Header from './components/header/Header';
import Content from './components/Profile/Profile';


import { BrowserRouter, Route } from "react-router-dom";
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app_wrapper" >
        <Header />
        <div>
          <Route path="/Dialogs" render={() => <DialogsContainer
          // store={props.store}
          />} />

          <Route path="/Profile" render={() => <Content

          // store={props.store}

          />} />
          <Route path="/News" render={() => <News />} />

          <Route path="/Settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;