import './App.css';

import React, { Component } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';

import { Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
       
          <NavBar />
          <Routes>
             <Route path="/" element={<News key='general' pageSize={6} country="in" category="General" />} /> 
            <Route path="/business" element={<News key='business' pageSize={6} country="in" category="Business" />} />
            <Route path="/entertainment" element={<News key='entertainment' pageSize={6} country="in" category="Entertainment" />} />
            <Route path="/general" element={<News key='general' pageSize={6} country="in" category="General" />} />
            <Route path="/health" element={<News key='health' pageSize={6} country="in" category="Health" />} />
            <Route path="/science" element={<News key='science' pageSize={6} country="in" category="Science" />} />
            <Route path="/sports" element={<News key='sports' pageSize={6} country="in" category="Sports" />} />
            <Route path="/technology" element={<News key='technology' pageSize={6} country="in" category="Technology" />} />
          </Routes>
      </div>
    )
  }
}