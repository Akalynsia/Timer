import React, { useEffect, useState } from "react";

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isActive]);

  const handleStartStop = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsActive(false);
  };
  const timerId = setInterval(() => console.log("count"), 1000);
  clearInterval(timerId);

  return (
    <div className="p-12 mx-auto space-y-4 max-w-[300px]">
      <div className="font-bold text-center text-3xl">
        Zamanlayıcı: {seconds}
      </div>
      <div className="flex justify-between">
        <button className="text-amber-500 font-bold" onClick={handleReset}>
          Durdur
        </button>
        <button className="text-green-500 font-bold" onClick={handleStartStop}>
          {isActive ? "Duraklat" : "Başlat"}
        </button>
      </div>
    </div>
  );
}
