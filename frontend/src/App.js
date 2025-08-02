import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import Login from "./Login";
import Signup from "./Signup";
import axios from 'axios';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const logout = () => signOut(auth);

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const res = await axios.get(`http://localhost:5000/weather?city=${city}`);
      setWeather(res.data);
    } catch (err) {
      alert("Weather fetch failed");
    }
  };

  if (!user) {
    return (
      <>
        <Login onLogin={() => {}} />
        <Signup />
      </>
    );
  }

  return (
    <div className="App">
      <h2>🌤️ Weather App</h2>
      <input
        type="text"
        value={city}
        placeholder="Enter City"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>
      <button onClick={logout}>Logout</button>

      {weather && (
        <div className="weather">
          <h3>{weather.name}</h3>
          <p>🌡 Temp: {weather.main.temp} °C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>☁️ Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
