import { Nav } from "../components/Nav/Nav"

export default function Setting() {
  return (
    <div className="flex gap-10">
      <Nav></Nav>

      <div className="flex-grow py-16">
        <div className="">
          <h2 className="text-4xl font-bold mb-8">General</h2>

          <div>
            <div className="flex items-center">
              <p>12-Hour Time</p>

              <button></button>
            </div>
            <div className="flex items-center">
              <p>location</p>

              <button></button>
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="text-4xl font-bold mb-8">Units</h2>

          <div className="">
            <div className="">
              <h3 className="uppercase">Temperature</h3>

              <div className="">
                <span>Celsius</span>
                <span>Fahrenheit</span>
              </div>
            </div>
            <div className="">
              <h3 className="uppercase">Wind Speed</h3>

              <div className="">
                <span>Celsius</span>
                <span>Fahrenheit</span>
              </div>
            </div>
            <div className="">
              <h3 className="uppercase">Distance</h3>

              <div className="">
                <span>Kilometers</span>
                <span>Miles</span>
                <span>Meter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}