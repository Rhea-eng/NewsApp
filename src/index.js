import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/business" element={<App />} />
        <Route path="/entertainment" element={<App />} />
        <Route path="/general" element={<App />} />
        <Route path="/health" element={<App />} />
        <Route path="/science" element={<App />} />
        <Route path="/sports" element={<App />} />
        <Route path="/technology" element={<App />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
