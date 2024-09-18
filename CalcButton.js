import React from 'react'
import './App.css';

function CalcButton(props) {
  return (
      <button className={props.className} onClick={() => props.onClick(props.value)} >{props.value}</button>
  )
}

export default CalcButton

