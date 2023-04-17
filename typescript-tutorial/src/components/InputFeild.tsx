import React from 'react';
import "./style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputFeild: React.FC<Props> = ({ todo, setTodo }) => {

  return (
    <div className="input">
      <input type="input" placeholder="Enter a task" className="input__box" value={todo} onChange={(e) => setTodo(e.target.value)}></input>
      <button className="input_submit" type="submit">Go</button>
    </div>
  )
}

export default InputFeild
