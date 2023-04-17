import React from 'react'
import "./style.css";

const InputFeild = () => {
  return (
    <div className="input">
      <input type="input" placeholder="Enter a task" className="input__box"></input>
      <button className="input_submit" type="submit">Go</button>
    </div>
  )
}

export default InputFeild
