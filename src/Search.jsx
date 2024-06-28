import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Search = ({ updatedInfo }) => {
    const [City, setCity] = useState("");
    const [error, setError] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "93750280cad6ac962dd14f0e0ae87b00";

    const GetWeatherInfo = async () => {
        try {
            const response = await fetch(`${API_URL}?q=${City}&appid=${API_KEY}&units=metric`);
            const result = await response.json();

            if (response.ok) {
                const finalResult = {
                    city: City,
                    temp: result.main.temp,
                    minTemp: result.main.temp_min,
                    maxTemp: result.main.temp_max,
                    humidity: result.main.humidity,
                    feels_Like: result.main.feels_like,
                    weather: result.weather[0].description,
                };
                return finalResult;
            } else {
                throw new Error(result.message);
            }
        } catch (err) {
            setError("No such place in our API");
            return null;
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(""); // Reset error message
        setCity("");
        try {
            let newInfo = await GetWeatherInfo();
            if (newInfo) {
                updatedInfo(newInfo);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleInputChange = (event) => {
        setCity(event.target.value);
    }

    return (
        <div className='search'>
            <h1>Weather Search</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    value={City}
                    onChange={handleInputChange}
                    required
                />
                <br /><br />
                <Button variant="contained" type="submit">Submit</Button>
                <br /><br />
                {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
        </div>
    );
}

export default Search;
