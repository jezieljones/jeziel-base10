import './App.css';
import { ToastContainer } from 'react-toastify';
import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify'
import { listCompanies } from './graphql/queries'
import Page from "./page.js"
function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
      <Page />
    </main>
  );
}

export default App;
