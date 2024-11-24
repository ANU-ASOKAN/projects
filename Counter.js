import React, { useRef, useState } from "react";
import "./Counter.css";

let Counter =()=> {
  const [timer, setTimer] = useState(0);
  const [counter, setCounter] = useState(false);

  let timeInterval = useRef(null);

  let start = () => {
    if (counter) return;
    setCounter(true);
    timeInterval.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 10);
  };

  let stop = () => {
    if (!counter) return;
    setCounter(false);
    clearInterval(timeInterval.current);
  };

  let reset = () => {
    setCounter(false);
    clearInterval(timeInterval.current);
    setTimer(0);
  };

  let format = (timer) => {
    const minutes = Math.floor(timer / 60000)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((timer / 1000) % 60)
      .toString()
      .padStart(2, "0");
    const milliseconds = (timer % 1000).toString().padStart(2, "0");

    return { minutes, seconds, milliseconds };
  };

  const { minutes, seconds, milliseconds } = format(timer);

  return (
    <div className="App">
      <h1>STOPWATCH</h1>
      <div className="timer-container">
        <div className="timer-box">
          <h1>{minutes}</h1>
        </div>
        <span className="colon">:</span>
        <div className="timer-box">
          <h1>{seconds}</h1>
        </div>
        <span className="colon">:</span>
        <div className="timer-box">
          <h1>{milliseconds}</h1>
        </div>
      </div>
      <div className="button-container">
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default Counter;
