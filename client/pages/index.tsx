import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Nav from '../src/components/nav';
import Home from './Home';

const App = () => (
  <div>
    <Head>
      <title>Short URIs</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel="stylesheet" href="static/main.css" />
    </Head>
    {/* <Nav /> */}
      <Home />
  </div>
)

export default App;
