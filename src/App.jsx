
import { useState, useEffect } from 'react'
import './App.css'
import FetchData from './componets/FetchData';
import Counter from './componets/Counter';
import Todo from './componets/Todo';
import Search from './componets/Search';
import Accordion from './componets/Accordion';
import Stopwatch from './componets/Stopwatch';

function App({id="21"}) {
      
    return (
        <div>
            {/* <FetchData id={id}/> */}
            hi
            <Counter />
            <Todo />
            <Search />
            <Accordion />
            <Stopwatch />
        </div>
    );
}

export default App
