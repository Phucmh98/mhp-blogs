"use client";

import { getCurrentWeather } from "@/api/weatherApi";
import FocusFrame from "@/components/true-focus";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Player } from "@lordicon/react";
import { InteractiveIcon } from "../../../../components/commons/interactive-icon/interactive-icon";
import { Wind, Droplet } from "lucide-react";

const About = () => {
  const [timeOfDay, setTimeOfDay] = useState("");
  const [weather, setWeather] = useState<any>(null);
  const [today, setToday] = useState("");

  //Location
  const [iconLocation, setIconLocation] = useState(null);
  const [animationData, setAnimationData] = useState("loop-roll");

  const playerRefIconLocation = useRef<Player>(null);
  const timeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    getCurrentWeather("Ho Chi Minh").then((data) => {
      if (data) {
        setWeather(data);
        console.log(data);

        // ✅ Lấy giờ Việt Nam từ API
        const localTimeString = data.location.localtime;
        const localTime = new Date(localTimeString.replace(" ", "T")); // convert thành Date object
        const dayName = weekdays[localTime.getDay()];
        const day = localTime.getDate();
        const month = localTime.getMonth() + 1;
        const year = localTime.getFullYear();

        setToday(
          `${dayName}, ${day < 10 ? "0" + day : day}/${
            month < 10 ? "0" + month : month
          }/${year}`
        );
        console.log("Today in Vietnam is:", today);
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

    // ✅ Format ngày tháng năm
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    fetch("https://cdn.lordicon.com/onmwuuox.json")
      .then((res) => res.json())
      .then((data) => {
        setIconLocation(data);
      });
  }, []);

  useEffect(() => {
    if (iconLocation) {
      playerRefIconLocation?.current?.playFromBeginning();
    }
  }, [iconLocation]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeVN = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Ho_Chi_Minh",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(now);

      if (timeRef.current) {
        timeRef.current.textContent = `${timeVN}`;
      }
    }, 1000);

    return () => clearInterval(interval); // cleanup khi component unmount
  }, []);

  return (
    <FocusFrame glowColor="#ff990080" borderColor="#fe9a00" animationDuration={0.3} interval={2500}>
      {/* About Header */}
      <div className="w-full relative flex items-center justify-center my-8">
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
      {/* About Header */}
      <div className="mb-10 pt-8 text-gray-500">
        <div className=" border rounded-lg p-4 shadow-md">
          <div className="w-full flex items-center justify-between">
            <div className="focusable w-fit text-amber-700 border-1 rounded-2xl px-2.5 py-0.5 font-medium">
              {timeOfDay}
            </div>

            <span className="text-amber-700" ref={timeRef}></span>
          </div>
          <div className="focusable text-xl my-3 font-normal">
            I'm a frontend developer who loves building weird, fun, and
            sometimes ridiculous things on the web — stuff that spins, blinks,
            moves, and makes people smile. I use React, TypeScript, and a little
            bit of beautiful nonsense to keep the internet interesting.
          </div>

          <div className=" grid grid-cols-8 gap-2 mt-3">
            <div className="ml-8 col-span-5  h-full justify-between items-center">
              {/* Icon Link */}
              <InteractiveIcon
                iconUrl="https://cdn.lordicon.com/gsjfryhc.json"
                label="Connect"
                animationState="in-reveal"
                animationHover="hover-bounce"
                classNameContainer="font-medium flex w-fit items-center select-none"
                sizeIcon={24}
              />

              {/* Icon Github */}
              <InteractiveIcon
                iconUrl="https://cdn.lordicon.com/jjxzcivr.json"
                label="Github"
              />

              {/* Icon Linkedin */}
              <InteractiveIcon
                iconUrl="https://cdn.lordicon.com/euybrknk.json"
                label="Linkedin"
              />
              {/* Icon Facebook */}
              <InteractiveIcon
                iconUrl="https://cdn.lordicon.com/lplofcfe.json"
                label="Facebook"
              />

              {/* Icon Facebook */}
              <InteractiveIcon
                iconUrl="https://cdn.lordicon.com/ozlkyfxg.json"
                animationHover="hover-spin"
                label="Email"
              />
            </div>

            <div className="col-span-3 flex flex-col items-end mr-6">
              <div
                className="focusable select-none flex w-fit bg-amber-500 px-2 py-1 rounded-3xl text-white items-center"
                onMouseEnter={() => {
                  setAnimationData("hover-jump-roll");
                  playerRefIconLocation.current?.play();
                }}
                onMouseLeave={() => {
                  setAnimationData("loop-roll");
                  playerRefIconLocation.current?.play();
                }}
              >
                {/* Icon Location */}
                <Player
                  ref={playerRefIconLocation}
                  icon={iconLocation}
                  size={24}
                  colors="primary:#ffffff,secondary:#ffffff"
                  state={animationData}
                  onComplete={() => {
                    playerRefIconLocation.current?.pause();
                  }}
                />
                <span className="text-lg"> {weather?.location.country}</span>
              </div>
              <div className="focusable w-fit mt-1.5">{weather?.location.name}</div>
              <div className="focusable w-fit mt-1.5">{today}</div>
              <div className="flex">
                {weather?.current?.condition?.icon && (
                  <Image
                    src={`https:${weather.current.condition.icon}`}
                    alt="weather icon"
                    width={54}
                    height={54}
                  />
                )}
                <div className="text-[28px] font-semibold flex items-center justify-center">
                  {weather?.current?.temp_c}°C
                </div>
              </div>
              <div className="w-fit">{weather?.current.condition.text}</div>

            </div>
          </div>
        </div>
       
      </div>
    </FocusFrame>
  );
};

export default About;
