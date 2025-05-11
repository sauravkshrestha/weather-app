import { JSX, useEffect, useState } from "react";
import Link from "next/link";
import sunny from "../../../../public/sunny.svg";
import ForcastCard from "../ForcastCard/ForcastCard";
import { APIResponse, Forecast, Hour, ForecastDay } from "@/types/weather";
import Search from "../Search/Search";

interface MainPageProps {
    weather: APIResponse | null,
}

function MainPage({ weather }: MainPageProps): JSX.Element {
    let defaultValue: string = "N/A";
    const [forecast, setForecast] = useState<Forecast | null>(null);
    const [hours, setHours] = useState<Hour[] | null>(null);
    const [forcastHour, setForecastHour] = useState<Hour[] | null>(null);
    const [nextDay, setNextDay] = useState<ForecastDay | null>(null);
    const [nextHour, setNextHour] = useState<Hour | null>(null);

    useEffect((): void => {
        setForecast(weather?.forecast || null);
        setHours(weather?.forecast.forecastday[0].hour || null);
        setNextDay(weather?.forecast.forecastday[1] || null);
        returnChancesOfRain(weather?.forecast?.forecastday || []);
    }, []);

    const card: JSX.Element[] | undefined = hours?.filter(hour => {
        let currentTime: Date = new Date(Date.now());
        let currentHour: number = currentTime.getHours();

        let date = new Date(hour.time);
        let hourTime: number = date.getHours();

        return hourTime > currentHour;

    }).map((hour, index): JSX.Element => {
        let date = new Date(hour.time);
        let hourTime: number = date.getHours();
        let minutes: number = date.getMinutes();
        let ampm: string = hourTime >= 12 ? "PM" : "AM";

        hourTime = hourTime >= 12 ? (((hourTime % 12) == 0) ? 12 : (hourTime % 12)) : hourTime;
        let time: string = String(hourTime).padStart(2, "0") + ":" + String(minutes).padStart(2, "0") + " " + ampm;

        return (
            <ForcastCard timeStamp={time} temp={hour.temp_c} key={index}></ForcastCard>
        );
    });

    function returnChancesOfRain(data: ForecastDay[]): void {
        const currentDate = new Date();
        let currentHour: number = currentDate.getHours();

        if(currentHour == 23) {
            setNextHour(data[1].hour[0] || null);
        } else {
            let nextHourData: Hour | null = returnNextHourData(data[0].hour);
            setNextHour(nextHourData);
        }
    }

    function returnNextHourData(todayHours: Hour[]): Hour | null {
        const currentDate = new Date();
        let currentHour: number = currentDate.getHours();

        for(let i: number = 0; (todayHours && i <= todayHours?.length); i++) {
            let date = new Date(todayHours[i].time);
            let hourTime: number = date.getHours();
            if(hourTime > currentHour) {
                return todayHours[i];
            }
        }
        
        return null;
    }

    return (
        <>
            <div className="flex-grow py-16">
                <Search></Search>

                <main className="main w-full" id="main">
                    <div className="flex justify-between items-center gap-4 p-12 mb-8">
                        <div>
                            <div className="mb-24">
                                <h1 className="text-7xl font-bold mb-4">{weather?.location?.name || defaultValue}, {weather?.location?.country}</h1>
                                <p className="text-gray-500 text-xl font-medium">Chance of rain: <span>{nextHour?.chance_of_rain + "%" || defaultValue}</span></p>
                            </div>

                            <p className="font-bold text-black text-8xl">{weather ? <span>{weather.current.temp_c}&deg;{"C"}</span> : defaultValue}</p>

                            <div className="mt-8 flex items-center gap-8">
                                <span className="text-xl font-semibold">Max Temp. :&nbsp;&nbsp;{weather?.forecast.forecastday[0].day.maxtemp_c}</span>
                                <span className="text-xl font-semibold">Min Temp. :&nbsp;&nbsp;{weather?.forecast.forecastday[0].day.mintemp_c}</span>
                            </div>
                        </div>

                        <div className="">
                            {/* <img src={sunny.src} alt="SUNNY" width={300} height={300} /> */}
                            <img src={weather?.current.condition.icon} alt={weather?.current.condition.text} width={300} height={300} />
                        </div>
                    </div>

                    {card && card?.length > 0 && <div className="p-12">
                        <div className="flex justify-between items-center gap-4 mb-6">
                            <h2 className="text-2xl font-semibold">TODAY'S FORCAST</h2>
                        </div>

                        <div className="flex flex-nowrap overflow-y-auto pb-10">
                            {card}
                        </div>
                    </div>}

                    <div>
                        <div className="mb-12">
                            <div className="flex justify-between items-center gap-4 mb-6">
                                <h2 className="text-2xl font-semibold">OTHER DETAILS</h2>

                                <Link href={"/"}>See more</Link>
                            </div>

                            <div className="flex flex-wrap gap-y-12">
                                <div className="w-1/2 p-4 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <img src={sunny.src} alt="S" width={20} height={20} />
                                        <span className="text-xl font-medium">REAL FEEL</span>
                                    </div>

                                    <p className="color-black text-center text-2xl font-semibold">{weather ? <span>{weather.current.feelslike_c}&deg;C</span> : defaultValue}</p>
                                </div>

                                <div className="w-1/2 p-4 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <img src={sunny.src} alt="S" width={20} height={20} />
                                        <span className="text-xl font-medium">WIND SPEED</span>
                                    </div>

                                    <p className="color-black text-center text-2xl font-semibold">{weather ? <span>{weather.current.wind_kph} Km/h</span> : defaultValue}</p>
                                </div>

                                <div className="w-1/2 p-4 flex justify-between items-center">

                                    <div className="flex items-center gap-3">
                                        <img src={sunny.src} alt="S" width={20} height={20} />
                                        <span className="text-xl font-medium">CHANCE OF RAIN</span>
                                    </div>

                                    <p className="color-black text-center text-2xl font-semibold">{nextHour?.chance_of_rain + "%" || defaultValue}</p>
                                </div>

                                <div className="w-1/2 p-4 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <img src={sunny.src} alt="S" width={20} height={20} />
                                        <span className="text-xl font-medium">AQI</span>
                                    </div>

                                    <p className="color-black text-center text-2xl font-semibold">{defaultValue}</p>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <h2 className="text-2xl font-semibold">Today weather data</h2>

                            <div className="visualization"></div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default MainPage;