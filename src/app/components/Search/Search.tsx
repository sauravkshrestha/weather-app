import { JSX } from "react";

export default function Search(): JSX.Element {
  return (
    <div className="search mb-8">
      <div className="search__box">
        <input type="search" name="search" id="search" placeholder="Search For Cities" className="outline-none appearance-none w-full h-12 border border-black rounded-lg p-4" />
      </div>
    </div>
  );
}