"use client";
import { useState, JSX, useEffect } from "react";
import { Nav } from "./components/Nav/Nav";
import MainPage from "./components/MainPage/MainPage";
import AsideCard from "./components/AsideCard/AsideCard";
import { APIResponse, ForecastDay } from "@/types/weather";


/**
 * TODO
 * search place
 * settings
 * cities(add fav cities and choose default)
 * 
 */

interface Settings {
  unit: "C" | "F",
  hour: 12 | 24,
  windSpeed: "Km/h" | "m/s" | "mph",
  distance: "Km" | "Mile" | "m",
  useLocation: boolean
}

interface Location {
  latitude?: number,
  longitude?: number,
  name?: string
}

export default function Home(): JSX.Element {
  const [weatherData, setWeatherData] = useState<APIResponse | null>(null);
  const [dailyForcastData, setDailyForcastData] = useState<{} | null>(null);
  const [location, setLocation] = useState<Location>({});
  const [defaultLocation, setDefaultLocation] = useState<string>("Kathmandu");
  const [coords, setCoords] = useState<{ latitude: number | null, longitude: number | null } | null>(null);
  const [weekData, setWeekData] = useState<ForecastDay[] | null>(null);
  // const [useLocation, setUseLocation] = useState<boolean>(false);

  useEffect((): void => {
    let apiKey: string | null = process.env.NEXT_PUBLIC_WEATHER_API_KEY || "";

    window.navigator.geolocation.getCurrentPosition(position => {
      if(position) {
        setCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });

        let loc: Location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }

        setLocation(loc);
        fetchWeatherData(loc, apiKey);
      } else {
        let loc: Location = {
          name: defaultLocation
        }
        setLocation(loc);
        fetchWeatherData(loc, apiKey);
      }
    }, (reject) => {
      let loc: Location = {
        name: defaultLocation
      }
      setLocation(loc);
      if(reject.PERMISSION_DENIED == 1) {
        fetchWeatherData(loc, apiKey);
      }
    });

  }, []);

  async function fetchWeatherData(location: Location, key: string): Promise<any> {
    let url: string = "";
    if(location.name) {
      // url = `https://api.openweathermap.org/data/2.5/weather?q=${location.name}&appid=${key}`;
      url = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location.name}&days=7&aqi=yes&alerts=no`;
    } else {
      // url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${key}`;
      url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${location.latitude},${location.longitude}&days=7&aqi=yes&alerts=no`;
    }

    try {
      const response = await fetch(url);
      const data: APIResponse = await response.json();

      setWeatherData(data);
      setWeekData(data?.forecast.forecastday);
    } catch(error) {
      console.error("Error: ", error);
    }
  }

  const weekCard: JSX.Element[] | undefined = weekData?.map((data, i) => {
    return <AsideCard minTemp={data.day.mintemp_c} maxTemp={data.day.maxtemp_c} date={data.date} condition={data.day.condition.text} icon={data.day.condition.icon} key={i}></AsideCard>;
  });

  return (
    <div className="flex gap-10">
      <Nav></Nav>

      {weatherData && <MainPage weather={weatherData} ></MainPage>}

      <aside className="w-xl p-8">
        <h2 className="text-4xl font-bold mb-8">Week Forecast</h2>
        {weekCard}
      </aside>
    </div>
  );
}
