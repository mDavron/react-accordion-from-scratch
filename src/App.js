import React, { useState } from 'react';
import { data } from './mocData'
import './App.css'

function App() {
  const [select, setSelect] = useState(null);
  const toggle = (i) => {
    if (select === i) {
      setSelect(null)
    }
    else {
      setSelect(i)
    }
  }
  return (
    <div className="accordion">
      <h1 style={{marginBottom:"40px"}}>React Accordion From Scratch</h1>
      {data.map((item, i) => {
        return (
          <div key={i} className="item">
            <div className={`title ${select === i ? "dark" : ""}`} >
              <h2>{item.question}</h2>
              <span onClick={() => toggle(i)}>{select === i ? "-" : "+"}</span>
            </div>
            <div className={`content ${select=== i ? "open" : ""}`}>
              {item.answer} 
            </div>
            
          </div>
        )
      })}
    </div>
  );
}



export default App;
