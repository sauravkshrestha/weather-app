import { JSX } from "react";
import Link from "next/link";
import sunny from "../../../../public/sunny.svg";
import { APIResponse } from "@/types/weather";
import ForcastCard from "../ForcastCard/ForcastCard";

interface MainPageProps {
    weather: APIResponse | null
}

function MainPage({ weather }: MainPageProps): JSX.Element {
    let defaultValue: string = "N/A";

    let times: string[] = ["01:00AM", "02:00AM", "03:00AM", "04:00AM", "05:00AM", "06:00AM"];

    let card: JSX.Element[] = times.map((time, i) => {
        return (
            <ForcastCard timeStamp={time} key={i}></ForcastCard>
        );
    });

    return (
        <>
            <div className="flex-grow py-16">
                <div className="search mb-8">
                    <div className="search__box">
                        <input type="search" name="search" id="search" placeholder="Search For Cities" className="outline-none appearance-none w-full h-12 border border-black rounded-lg p-4" />
                    </div>
                </div>

                <main className="main grow" id="main">
                    <div className="flex justify-between items-center gap-4 p-12 mb-8">
                        <div>
                            <div className="mb-24">
                                <h1 className="text-7xl font-bold mb-4">{weather ? weather.name : defaultValue}</h1>
                                <p className="text-gray-500 text-xl font-medium">Chance of rain: <span>0%</span></p>
                            </div>

                            <p className="font-bold text-black text-8xl">{weather ? <span>{weather.main.temp}&deg;{"F"}</span> : defaultValue}</p>
                        </div>

                        <div className="">
                            <img src={sunny.src} alt="SUNNY" width={300} height={300} />
                        </div>
                    </div>

                    <div className="p-12">
                        <div className="flex justify-between items-center gap-4 mb-6">
                            <h2 className="text-2xl font-semibold">TODAY'S FORCAST</h2>
                        </div>

                        <div className="flex flex-nowrap overflow-y-auto pb-10">
                            {card}
                        </div>
                    </div>

                    <div className="p-12">
                        <div className="flex justify-between items-center gap-4 mb-6">
                            <h2 className="text-2xl font-semibold">OTHER DETAILS</h2>

                            <Link href={"/"}>See more</Link>
                        </div>

                        <div className="flex flex-wrap gap-8">
                            <div className="w-1/2">
                                <div className="flex items-center gap-3 mb-4">
                                    <img src={sunny.src} alt="S" width={20} height={20} />
                                    <span className="text-xl font-medium">REAL FEEL</span>
                                </div>

                                <p className="color-black text-center text-2xl font-semibold">{weather ? <span>{weather.main.feels_like}&deg;</span> : defaultValue}</p>
                            </div>
                            <div className="w-1/2">
                                <div className="flex items-center gap-3 mb-4">
                                    <img src={sunny.src} alt="S" width={20} height={20} />
                                    <span className="text-xl font-medium">WIND SPEED</span>
                                </div>

                                <p className="color-black text-center text-2xl font-semibold">{weather ? <span>{weather.wind.speed} Km/h</span> : defaultValue}</p>
                            </div>
                            <div className="w-1/2">
                                <div className="flex items-center gap-3 mb-4">
                                    <img src={sunny.src} alt="S" width={20} height={20} />
                                    <span className="text-xl font-medium">CHANCE OF RAIN</span>
                                </div>

                                <p className="color-black text-center text-2xl font-semibold">10%</p>
                            </div>
                            <div className="w-1/2">
                                <div className="flex items-center gap-3 mb-4">
                                    <img src={sunny.src} alt="S" width={20} height={20} />
                                    <span className="text-xl font-medium">AQI</span>
                                </div>

                                <p className="color-black text-center text-2xl font-semibold">100</p>
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        </>
    );
}

export default MainPage;