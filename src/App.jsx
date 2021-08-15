import './sass/app.sass';
import React from 'react';

import { Attribution, Header, MainContent } from './components';

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
