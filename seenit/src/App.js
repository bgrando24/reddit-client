
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Frontpage } from './components/pages/Frontpage';
import { Profile } from './components/profile/Profile';
import { useState } from 'react';
import { HomeNavbar } from './components/navbar/Navbar';
import { Subreddit } from './components/pages/Subreddit';
import { Settings } from './components/settings/Settings';
import { About } from './components/about/About';
import { PortfolioRedirect } from './components/PortfolioRedirect';

function App() {

  // holds the current subreddit to display
  const [subreddit, setSubreddit] = useState('');

  return (
    <>

      <Router>

        <Routes>

          <Route path='/reddit-client' element={<Navigate to='/home' />} />

          <Route path='/reddit-client/see' element={
            <>
              <Navbar subreddit={subreddit} setSubreddit={setSubreddit} />
              <Subreddit subreddit={subreddit} setSubreddit={setSubreddit}/>
            </>
          } />

          <Route path='/reddit-client/see/:sr' element={
            <>
              <Navbar subreddit={subreddit} setSubreddit={setSubreddit} />
              <Subreddit subreddit={subreddit} setSubreddit={setSubreddit} />
            </>
          } />

          <Route path='/reddit-client/home' element={
            <>
              <HomeNavbar />
              <Frontpage setSubreddit={setSubreddit}/>
            </>
          } />

          <Route path='/reddit-client/profile' element={
            <>
              <HomeNavbar />
              <Profile />
            </>
          } />

          <Route path='/reddit-client/settings' element ={
            <>
              <HomeNavbar />
              <Settings />
            </>
          } />

          <Route path='/reddit-client/about' element ={
            <>
              <HomeNavbar />
              <About />
            </>
          } />

          <Route path='/reddit-client/portfolio' element ={
            <PortfolioRedirect />
          } />

        </Routes>

      </Router>
      
  </>
  );
}

export default App;
