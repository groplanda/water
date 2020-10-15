import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/MyPosts/MyPosts';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <div className='App-area'>
          <Navbar />
          <Route path='/profile' exact component={Profile}/>
          <Route path='/dialogs' exact component={Dialogs}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
