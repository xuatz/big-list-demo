import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const lists = [];
for (let x = 0; x < 15; x++) {
  const randomList = [];
  const randomList2 = [];
  const randomList3 = [];
  for (let y = 0; y < 10000; y++) {
    const value = Math.random();
    const id = `pikachu${y}`;
    randomList.push(value);
    randomList2.push({
      id,
      value
    });
    randomList3.push([id, value]);
  }
  lists.push(randomList2);
}

function changeList() {
  const index = Math.floor(Math.random() * lists.length);
  return {
    list: lists[index],
    timestamp: new Date().toLocaleString()
  };
}

function App() {
  const [listProps, setListProps] = useState({});
  const [myInput, setInput] = useState('');

  useEffect(() => {
    setInterval(() => setListProps(changeList()), 500);
  }, [setListProps]);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>

      <div>
        <input value={myInput} onChange={e => setInput(e.target.value)} />
      </div>

      <h2>{listProps.timestamp}</h2>

      {listProps.list &&
        listProps.list.map((item, index) => {
          return (
            <div key={index}>
              <label>{item.id}</label>
              <span>{item.value}</span>
            </div>
          );
        })}
    </div>
  );
}

export default App;
