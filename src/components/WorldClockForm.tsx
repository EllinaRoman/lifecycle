import { useState, type SubmitEvent } from "react";

export default function WorldClockForm({
  onAdd,
}: {
  onAdd: (city: string, timezoneOffset: number) => void;
}) {
  const [city, setCity] = useState("");
  const [timezoneOffset, setTimezoneOffset] = useState("");

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!city.trim()) {
      return;
    }
    onAdd(city.trim(), +timezoneOffset);
    setCity("");
    setTimezoneOffset("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="city-name-div">
        <label htmlFor="city-name">Название</label>
        <input
          type="text"
          id="city-name"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          required
        />
      </div>

      <div className="city-time-div">
        <label htmlFor="city-time">Временная зона</label>
        <input
          type="number"
          id="city-time"
          step="any"
          value={timezoneOffset}
          onChange={(e) => {
            setTimezoneOffset(e.target.value);
          }}
          required
        />
      </div>

      <button type="submit">Добавить</button>
    </form>
  );
}
