import { getCurrentWeather } from "@/api/weatherApi";
import FocusFrame from "@/components/true-focus";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Player } from "@lordicon/react";

const About = () => {
  const [timeOfDay, setTimeOfDay] = useState("");
  const [weather, setWeather] = useState<any>(null);

  const [iconLocation, setIconLocation] = useState("in-roll-calm");
  const [animationData, setAnimationData] = useState(null);
  const playerRef = useRef<Player>(null);
  useEffect(() => {
    getCurrentWeather("Ho Chi Minh").then((data) => {
      if (data) {
        setWeather(data);
        console.log(data);
      }
    });

    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      setTimeOfDay("Good morning");
    } else if (hour >= 12 && hour < 18) {
      setTimeOfDay("Good afternoon");
    } else {
      setTimeOfDay("Good evening");
    }

    // Fetch animation JSON từ Lordicon
    fetch("https://cdn.lordicon.com/onmwuuox.json")
      .then((res) => res.json())
      .then((data) => {
        setAnimationData(data);
      });
  }, []);
  useEffect(() => {
    if(!playerRef.current) return;
    playerRef?.current?.playFromBeginning();
  }, []);
  return (
    <FocusFrame>
      <div className="w-full relative flex items-center justify-center py-4">
        <Image
          src="/image/gif/fire.gif"
          alt="fire-about"
          height={100}
          width={150}
          className="absolute top-0 left-1/2 "
          style={{ transform: "translate(calc( -50% - 60px), -40px)" }}
        />
        <span className="text-4xl font-semibold text-gray-500">About me</span>
      </div>
      <div className="py-4 text-xl text-gray-400 grid grid-cols-6 gap-4">
        <div className=" col-span-4 border-1 border-gray-300 rounded-lg p-4 shadow-md">
          <div className="text-green-400 font-medium">{timeOfDay}</div>

          <span className="focusable">
            I'm a frontend developer who loves building weird, fun, and
            sometimes ridiculous things on the web — stuff that spins, blinks,
            moves, and makes people smile. I use React, TypeScript, and a little
            bit of beautiful nonsense to keep the internet interesting.
          </span>
        </div>
        <div className="focusable col-span-2 border-1 border-gray-300 rounded-lg p-4 shadow-md">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <span
                className="w-fit bg-amber-500 px-2 py-1 rounded-3xl text-white"
                onMouseEnter={() => {
                  setIconLocation("hover-jump-roll");
                }}
                onMouseLeave={() => {
                  setIconLocation("in-roll-calm");
                }}
              >
                <Player
                  ref={playerRef}
                  icon={animationData}
                  size={30}
                  colors="primary:#ffffff,secondary:#ffffff"
                  state={iconLocation}
                />
                {weather?.location.country}
              </span>
              <span className="w-fit px-3 py-1 rounded-xl bg-gray-100 text-gray-800">
                {weather?.location.name}
              </span>
            </div>
            <div className="flex flex-col justify-end items-center">
              {weather?.current?.condition?.icon && (
                <Image
                  src={`https:${weather.current.condition.icon}`}
                  alt="weather icon"
                  width={50}
                  height={50}
                />
              )}
              <span className="text-2xl font-semibold">
                {weather?.current?.temp_c}°C
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" px-4 py-2 bg-blue-500 text-white rounded">Item 3</div>
      <div className="focusable px-4 py-2 bg-pink-500 text-white rounded">
        Item 4
      </div>
    </FocusFrame>
  );
};

export default About;
