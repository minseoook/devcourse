import { useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  const handleClick = () => {
    setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  return (
    <div>
      <h1>타이머 : {seconds}초</h1>
      <button onClick={handleClick}>버튼</button>
    </div>
  );
};

export default Timer;
