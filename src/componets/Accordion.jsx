import React, { useState } from 'react'

function Accordion() {

    const [activeIndex, setActiveIndex] = useState(null);

    const items = [
        {title: "What is React?", content: "React is a JavaScript library for building user interfaces."},
        {title: "Why use React?", content: "React is a favorite among developers because of its simplicity and flexibility."},
        {title: "How do you use React?", content: "You use React by creating components."}
    ];

    const toggleItem = (index) => {
        if(activeIndex === index){
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };


  return (
    <div>
      <h1>Accordion</h1>
      {items.map((item, i)=> (
        <div key={i}>
            <h3 onClick={()=> toggleItem(i)}>{item.title}</h3>
            {activeIndex === i && <div>{item.content}</div>}
        </div>
      ))

      }
    </div>
  )
}

export default Accordion
