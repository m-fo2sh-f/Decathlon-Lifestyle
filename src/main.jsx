import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // 1. استيراد المدير

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 2. بنغلف التطبيق كله عشان الراوتر يشتغل في كل مكان */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);