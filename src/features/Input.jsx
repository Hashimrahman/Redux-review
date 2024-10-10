import { useDispatch } from "react-redux";
import { addNewInput } from "./inputSlice";
import { useState } from "react";

const Input = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (text.trim().length === 0) {
      alert("Enter some text");
      return;
    }
    dispatch(addNewInput(text));
    setText('');
  };

  return (
    <div>
      <input
        type="number"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{display:'block', marginBottom:'1rem', height:'2rem'}}
      />
      <button onClick={handleAddTask}>Submit</button>
    </div>
  );
};
export default Input;
