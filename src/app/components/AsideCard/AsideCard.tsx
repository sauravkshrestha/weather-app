import { JSX, useEffect, useState } from "react";
import { APIResponse, ForecastDay } from "@/types/weather";
import sunny from "../../../../public/sunny.svg";

interface WeekData {
    minTemp: number,
    maxTemp: number,
    date: string,
    condition: string,
    icon: string
}

export default function AsideCard({ minTemp, maxTemp, date, condition, icon }: WeekData): JSX.Element {
    const [dayName, setDayName] = useState<string | null>(null);

    useEffect((): void => {
        const current = new Date();
        const currentDate: number = current.getDate();
        const d = new Date(date);
        const dDate: number = d.getDate();
        const dName: string = d.toLocaleDateString("en-US", { weekday: "long" });

        currentDate == dDate ? setDayName("Today") : setDayName(dName);
    }, []);

    return (
        <div>
            <div className="p-4">
                <p className="text-2xl font-semibold mb-6">{dayName}</p>

                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <img src={icon} alt={condition} width={30} height={30} />
                        <span className="text-xl font-semibold">{condition}</span>
                    </div>

                    <p className="text-xl font-semibold">{maxTemp}<span className="font-medium">/{minTemp}</span></p>
                </div>
            </div>
        </div>
    );
}