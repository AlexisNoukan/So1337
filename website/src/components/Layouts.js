// Layout.js

import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        {/* Header content */}
        <h1>Welcome to My App</h1>
      </header>
      <main>
        {/* Main content */}
        {children}
      </main>
      <footer>
        {/* Footer content */}
        <p>Copyright © 2024 My App</p>
      </footer>
    </div>
  );
};

export default Layout;
