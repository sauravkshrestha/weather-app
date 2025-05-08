import { JSX } from "react";
import Link from "next/link";

function Nav():JSX.Element {
    return (
        <nav className="nav self-start px-8 py-12 sticky top-0" id="nav">
            <ul className="nav__list">
                <li>
                    <Link href="/" className="flex flex-col items-center mb-12">
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M450-770v-150h60v150h-60Zm256 106-42-43 106-106 42 43-106 106Zm64 214v-60h150v60H770Zm1 302L665-254l43-43 106 106-43 43ZM254-664 148-770l42-42 106 106-42 42Zm-14 484h180q33.33 0 56.67-23.26Q500-226.53 500-259.76 500-293 477.24-317q-22.77-24-56.24-24h-44l-18-41q-15.15-35.75-47.6-56.88Q278.95-460 240-460q-58.33 0-99.17 40.76-40.83 40.77-40.83 99Q100-262 140.83-221q40.84 41 99.17 41Zm0 60q-83 0-141.5-58.5T40-320q0-83 58.5-141.5T240-520q57.74 0 105.37 32.5T416-401q60.12 0 101.06 43.59Q558-313.82 558-253q-5 56-44.03 94.5Q474.93-120 420-120H240Zm318-133q-3-15.38-6-30t-6-30q52-20 83-65.54 31-45.54 31-101.32 0-75.14-52.5-127.64T480-660q-67.22 0-117.63 42.67Q311.96-574.65 303-509q-16-3-31.5-5.5T240-520q14-88 82.5-144T480-720q100 0 170 70t70 170.34Q720-402 675.5-340T558-253Zm-77-227Z" /></svg>

                        <span className="text-xl uppercase font-medium mt-2">Home</span>
                    </Link>
                </li>
                <li>
                    <Link href="/test" className="flex flex-col items-center mb-12">
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M360-200v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360ZM200-160q-33 0-56.5-23.5T120-240q0-33 23.5-56.5T200-320q33 0 56.5 23.5T280-240q0 33-23.5 56.5T200-160Zm0-240q-33 0-56.5-23.5T120-480q0-33 23.5-56.5T200-560q33 0 56.5 23.5T280-480q0 33-23.5 56.5T200-400Zm0-240q-33 0-56.5-23.5T120-720q0-33 23.5-56.5T200-800q33 0 56.5 23.5T280-720q0 33-23.5 56.5T200-640Z" /></svg>

                        <span className="text-xl uppercase font-medium mt-2">Cities</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="flex flex-col items-center mb-12">
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="m600-120-240-84-186 72q-20 8-37-4.5T120-170v-560q0-13 7.5-23t20.5-15l212-72 240 84 186-72q20-8 37 4.5t17 33.5v560q0 13-7.5 23T812-192l-212 72Zm-40-98v-468l-160-56v468l160 56Zm80 0 120-40v-474l-120 46v468Zm-440-10 120-46v-468l-120 40v474Zm440-458v468-468Zm-320-56v468-468Z" /></svg>

                        <span className="text-xl uppercase font-medium mt-2">Map</span>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" /></svg>

                        <span className="text-xl uppercase font-medium mt-2">Settings</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export { Nav };