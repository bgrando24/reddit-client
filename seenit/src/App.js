
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Frontpage } from './components/pages/Frontpage';
import { Profile } from './components/profile/Profile';
import { useState } from 'react';
import { HomeNavbar } from './components/navbar/Navbar';
import { Subreddit } from './components/pages/Subreddit';

function App() {

  // holds the current subreddit to display
  const [subreddit, setSubreddit] = useState('');

  return (
    <>

      <Router>

        <Routes>

          <Route path='/' element={<Navigate to='/home' />} />

          <Route path='/see' element={
            <>
              <Navbar subreddit={subreddit} setSubreddit={setSubreddit} />
              <Subreddit subreddit={subreddit} setSubreddit={setSubreddit}/>
            </>
          } />

          <Route path='/see/:sr' element={
            <>
              <Navbar subreddit={subreddit} setSubreddit={setSubreddit} />
              <Subreddit subreddit={subreddit} setSubreddit={setSubreddit} />
            </>
          } />

          <Route path='/home' element={
            <>
              <HomeNavbar />
              <Frontpage setSubreddit={setSubreddit}/>
            </>
          } />

          <Route path='/profile' element={
            <>
              <HomeNavbar />
              <Profile />
            </>
          } />

        </Routes>

      </Router>
      
  </>
  );
}

export default App;
