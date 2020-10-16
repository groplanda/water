import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

const App = ({state}) => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <div className='App-area'>
          <Navbar />
          <Route path='/profile' render={ () => <Profile posts={state.profilePage} /> }/>
          <Route path='/dialogs' render={ () => <Dialogs state={state.dialogPage}/> }/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
