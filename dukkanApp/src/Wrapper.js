import React from 'react';
import App from './App';
import AuthProvider from './context/AuthProvider';

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
