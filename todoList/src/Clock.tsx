import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div>
      <h1>{time.toLocaleDateString()}</h1>
    </div>
  );
};

export default Clock;
