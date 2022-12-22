
import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


const App = () => {
  const [progress, setProgress] = useState(0)
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;
  // apiKey = "cc2847bce80a4544ad41a2bf0358b5a7";

  return (
    <>
      <Router>
        <NavBar />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} key='general' apiKey={apiKey} pageSize={pageSize} country={'in'} category={'general'} />} ></Route>
          <Route exact path='/business' element={<News setProgress={setProgress} key='business' apiKey={apiKey} pageSize={pageSize} country={'in'} category={'business'} />} ></Route>
          <Route exact path='/entertainment' element={<News setProgress={setProgress} key='entertainment' apiKey={apiKey} pageSize={pageSize} country={'in'} category={'entertainment'} />} ></Route>
          <Route exact path='/health' element={<News setProgress={setProgress} key='health' apiKey={apiKey} pageSize={pageSize} country={'in'} category={'health'} />} ></Route>
          <Route exact path='/science' element={<News setProgress={setProgress} key='science' apiKey={apiKey} pageSize={pageSize} country={'in'} category={'science'} />} ></Route>
          <Route exact path='/sports' element={<News setProgress={setProgress} key='sport' apiKey={apiKey} pageSize={pageSize} country={'in'} category={'sports'} />} ></Route>
          <Route exact path='/technology' element={<News setProgress={setProgress} key='technology' apiKey={apiKey} pageSize={pageSize} country={'in'} category={'technology'} />} ></Route>
          <Route exact path='/about' element={<News setProgress={setProgress} key='about' apiKey={apiKey} pageSize={pageSize} country={'in'} category={'about'} />} ></Route>
        </Routes>
      </Router>
    </>)
}

export default App;


