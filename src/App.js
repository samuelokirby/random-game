import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import {Helmet} from 'react-helmet';
import {useQuery} from 'react-query';

const getPosts = async () => {
  const response = await fetch('https://api.rawg.io/api/games');
  return response.json();
}

function App() {

  const { status, data, isFetching, error } = useQuery('posts', getPosts);

  return (
    <main>
      hi
    </main>
  );
}

export default App;
