"use client";
import { useState, JSX, useEffect } from "react";
import { Nav } from "./components/Nav/Nav";
import MainPage from "./components/MainPage/MainPage";
import AsideCard from "./components/AsideCard/AsideCard";
import { APIResponse } from "@/types/weather";

export default function Home(): JSX.Element {
  const [weatherData, setWeatherData] = useState<APIResponse | null>(null);

  useEffect(() => {
    let apiKey: string | null = process.env.NEXT_PUBLIC_WEATHER_API_KEY || "";
    // window.navigator.geolocation.getCurrentPosition(position => {
    //   // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`)
    //   //   .then(res => res.json())
    //   //   .then(res => {
    //   //     console.log(res);
    //   //   });

    let res: APIResponse = {
      "coord": {
        "lon": 85.3379,
        "lat": 27.7117
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "base": "stations",
      "main": {
        "temp": 292.32,
        "feels_like": 292.43,
        "temp_min": 292.32,
        "temp_max": 292.32,
        "pressure": 1010,
        "humidity": 82,
        "sea_level": 1010,
        "grnd_level": 848
      },
      "visibility": 8000,
      "wind": {
        "speed": 1.54,
        "deg": 100
      },
      "clouds": {
        "all": 20
      },
      "dt": 1746642891,
      "sys": {
        "type": 1,
        "id": 9201,
        "country": "NP",
        "sunrise": 1746660842,
        "sunset": 1746708976
      },
      "timezone": 20700,
      "id": 7800827,
      "name": "Kathmandu",
      "cod": 200
    }

    setWeatherData(res);

    //   setLocation(l => {
    //     return {
    //       lat: position.coords.latitude,
    //       lon: position.coords.longitude,
    //     }
    //   });
    // });

  }, []);

  return (
    <div className="flex gap-40">
      <Nav></Nav>

      {weatherData && <MainPage weather={weatherData}></MainPage>}

      <aside className="">
        <h2>week forcanst</h2>
        <AsideCard></AsideCard>
      </aside>
    </div >
  );
}
