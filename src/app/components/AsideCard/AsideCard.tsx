import { JSX } from "react";

export default function AsideCard(): JSX.Element {
    return (
        <div>
            <p>Today</p>

            <div className="flex items-center">
                {/* <img src="" alt="" /> */}

                <span>Sunny</span>
            </div>

            <p>36<span>/22</span></p>
        </div>
    );
}