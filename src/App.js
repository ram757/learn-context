import React from 'react';
import logo from './logo.svg';
import Body from './components/Body';
import './App.css';
import ParentContainer from './containers/ParentContainer';

const renderBody = () => {
  //Playing around with render props
  return (
    <div>
      <div>Hello Render Props!</div>
      <ParentContainer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <Body renderBody={renderBody} />
    </div>
  );
}

export default App;
