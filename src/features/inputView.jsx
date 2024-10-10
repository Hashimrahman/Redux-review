import { useSelector } from "react-redux";

const InputView = () => {
  const tasks = useSelector((state) => state.input.tasks);

  return (
    <div>
      {tasks && tasks.length === 0 ? (
        <div>Nothing To Show</div>
      ) : (
        <ul>
          {tasks.map((item, index) => (
            <li key={index}>{item.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputView;
