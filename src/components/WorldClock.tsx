import { useState } from "react";
import { useEffect } from "react";

export default function WorldClock({
  city,
  timezoneOffset,
  onRemove
}: {
  city: string;
  timezoneOffset: number;
  onRemove: () => void;
}) {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const utc = time.getTime() + time.getTimezoneOffset() * 60000;
  const cityTime = new Date(utc + timezoneOffset * 3600000);

  return (
    <div className="world-clock">
      <h1>{city}</h1>
      <p>{cityTime.toLocaleTimeString(undefined,{hour12: false})}</p>
      <button className='remove' onClick={onRemove}>×</button>
    </div>
  );
}
