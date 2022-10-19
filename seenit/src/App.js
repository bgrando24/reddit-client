
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Frontpage } from './components/home/Frontpage';
import { Profile } from './components/profile/Profile';

function App() {
  return (
    <>

      <Router>

      <Navbar />

        <Routes>

          <Route path='/' element={<Frontpage />} />
          <Route path='/profile' element={<Profile />} />

        </Routes>

      </Router>
      
  </>
  );
}

export default App;
