import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from '../routes/Layout';
import DetailView from '../routes/DetailView';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index={true} element={<App />} />
          </Route>
          <Route index={false} path="/coinDetails/:symbol" element={<DetailView />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
