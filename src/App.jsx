import './sass/app.sass';
import React from 'react';

import { Header, MainContent, Attribution } from './components';

const App = () => {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <Attribution />
    </div>
  );
};

export default App;
