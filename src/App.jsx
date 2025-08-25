
import { useState, useEffect } from 'react'
import './App.css'
import FetchData from './componets/FetchData';
import Counter from './componets/Counter';
import Todo from './componets/Todo';

function App({id="21"}) {
      
    return (
        <div>
            {/* <FetchData id={id}/> */}
            hi
            <Counter />
            <Todo />
        </div>
    );
}

export default App
