import React from 'react';

function Layout({ children }) {
  return (
    <div className="min-h-screen w-full text-white">
      <div className="min-h-screen px-4 md:px-10 py-10">
        {children}
      </div>
    </div>
  );
}

export default Layout;
