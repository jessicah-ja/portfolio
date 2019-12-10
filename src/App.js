import React from 'react';
import './App.css';
import FullPage from './components/FullPage';

const fullpageOptions = {
  anchors: ['first', 'second', 'third', 'forth'],
  sectionsColor: ['#171b23', '#171b23', '#171b23', '#171b23'],
  callbacks: ['onLeave'],
  scrollOverflow: false,
  navigation: true,
  navigationTooltips: ['first', 'second', 'third', 'fourth']
};

function App() {
  return <FullPage {...fullpageOptions}/>;
}

export default App;
