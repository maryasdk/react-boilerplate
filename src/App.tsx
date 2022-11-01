import React from 'react';
import { Typography, Link } from '@mui/material';

import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant='h5'>
          Edit <code>src/App.tsx</code> and save to reload.
        </Typography>
        <Link
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          color="#61dafb"
        >
          Learn React
        </Link>
      </header>
      <footer>
        <Typography>Copyright &#169; 2022 Marya Sadek</Typography>
      </footer>
    </div>
  );
}

export default App;
