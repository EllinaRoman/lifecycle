import WorldClock from "./components/WorldClock";
import WorldClockForm from "./components/WorldClockForm";
import { useState } from "react";

export default function App() {
  const [clocks, setClocks] = useState<
    { city: string; timezoneOffset: number; id: number }[]
  >([]);

  const handleAdd = (city: string, timezoneOffset: number) => {
    const newArr = [...clocks, { city, timezoneOffset, id: Date.now() }];
    setClocks(newArr);
  };

  const handleRemove = (id: number) => {
    const newArr = clocks.filter((clock) => clock.id !== id);
    setClocks(newArr);
  };

  return (
    <>
      <WorldClockForm onAdd={handleAdd} />
      {clocks.map((clock) => {
        return (
          <WorldClock
            city={clock.city}
            timezoneOffset={clock.timezoneOffset}
            key={clock.id}
            onRemove={() => handleRemove(clock.id)}
          />
        );
      })}
    </>
  );
}
