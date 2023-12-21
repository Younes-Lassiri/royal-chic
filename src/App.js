import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Menu from './Components/Menu/Menu';
import FirstSec from './Components/FirstSec/FirstSec';
import SecondSec from './Components/SecondSec/SecondSec';
import ThirdSec from './Components/ThirdSec/ThirdSec';
import Collection from './Components/Collection/Collection';
import Last from './Components/Last/Last';
import FiveSec from './Components/FiveSec/FiveSec';


const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Landing/>
              <div>
                <Menu />
                <FirstSec />
                <SecondSec />
              </div>
              <div className='issue'><ThirdSec />
                </div>
              <div><Collection/></div>
              <div><FiveSec/></div>
              <div><Last/></div>
            </div>
          }
        />
        <Route path="/haha/*" element={<h1>Not Found</h1>} />
      </Routes>
      <div className='toTop'></div>
    </Router>
  );
};

export default App;
