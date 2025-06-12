import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { getCurrentWeather } from "@/api/weatherApi";
import FocusFrame from "@/components/true-focus";
import Image from "next/image";
import Link from "next/link";

type Weather = {
  location: {
    name: string;
    country: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
};

const InteractiveIcon = dynamic(
  () =>
    import("../../../../components/commons/interactive-icon/interactive-icon"),
  { ssr: false }
);
const AboutSection = () => {
  return (
    <section id="about" className="container max-w-5xl mx-auto w-full">
      <div className="top-[70px] sticky mb-96">
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl font-semibold",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 ",
            "mt-20"
          )}
        >
          About me
        </h2>
        <ContentBackground />
      </div>
    </section>
  );
};

export default AboutSection;

const ContentBackground = () => {
  const [timeOfDay, setTimeOfDay] = useState("");
  const [weather, setWeather] = useState<Weather | null>(null);
  const [today, setToday] = useState<string>("");

  const timeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    getCurrentWeather("Ho Chi Minh").then((data) => {
      if (data) {
        setWeather(data);

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
  }, []);

  useEffect(() => {
    // Chỉ chạy ở phía client
    if (typeof window !== "undefined") {
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

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <FocusFrame
      glowColor="#ff990080"
      borderColor="#fe9a00"
      animationDuration={0.3}
      interval={2500}
    >
      {/* About Header */}
      <div className="mb-10 mt-20 bg-gray-100/20 dark:bg-transparent backdrop-blur-xl dark:text-gray-200 text-gray-800">
        <div className=" border rounded-lg p-4 shadow-md space-y-5">
          <div className="w-full flex items-center justify-between">
            <div className="focusable w-fit text-amber-700 border-1 rounded-2xl px-2.5 py-0.5 font-medium">
              {timeOfDay}
            </div>

            <span className="text-amber-700" ref={timeRef}></span>
          </div>
          <div className="focusable text-base md:text-xl my-3 font-normal leading-8.5">
            I&#39;m a frontend developer who loves building weird, fun, and
            sometimes ridiculous things on the web — stuff that spins, blinks,
            moves, and makes people smile. I use React, TypeScript, and a little
            bit of beautiful nonsense to keep the internet interesting.
          </div>

          <div className=" grid grid-cols-2 gap-2 mt-3">
            <div className=" col-span-1 flex flex-col space-y-3 h-full ml-0 sm:ml-8 ">
              {/* Icon Link*/}

              <InteractiveIcon
                iconUrl="https://cdn.lordicon.com/gsjfryhc.json"
                label="Connect"
                animationState="in-reveal"
                sizeIcon={24}
                animationHover="hover-bounce"
                classNameContainer="font-medium flex w-fit items-center select-none"
              />

              {/* Icon Github */}
              <Link href="https://github.com/Phucmh98" target="_blank">
                <InteractiveIcon
                  iconUrl="https://cdn.lordicon.com/jjxzcivr.json"
                  label="Github"
                />
              </Link>
              {/* Icon Linkedin*/}
              <Link
                href="https://www.linkedin.com/in/mhphuc98/"
                target="_blank"
              >
                <InteractiveIcon
                  iconUrl="https://cdn.lordicon.com/euybrknk.json"
                  label="Linkedin"
                />
              </Link>
              {/* Icon Facebook */}
              <Link
                href="https://www.linkedin.com/in/mhphuc98/"
                target="_blank"
              >
                <InteractiveIcon
                  iconUrl="https://cdn.lordicon.com/lplofcfe.json"
                  label="Facebook"
                />
              </Link>

              {/* Icon Email */}
              <Link href="/contact" target="_blank">
                <InteractiveIcon
                  iconUrl="https://cdn.lordicon.com/ozlkyfxg.json"
                  animationHover="hover-spin"
                  label="Email"
                />
              </Link>
            </div>

            <div className="col-span-1 flex flex-col items-end mr-0 sm:mr-6 truncate space-y-2">
              <div className="focusable select-none flex w-fit bg-amber-500 px-2 py-1 rounded-3xl text-white items-center">
                {/* Icon Location */}

                <InteractiveIcon
                  iconUrl="https://cdn.lordicon.com/onmwuuox.json"
                  colors="primary:#ffffff,secondary:#ffffff"
                  animationState="in-roll-calm"
                  animationHover="hover-jump-roll"
                  classNameContainer="focusable flex items-center"
                  classNameLabel="text-lg"
                  label={weather?.location.country}
                />
              </div>
              <div className="focusable w-fit text-end mt-1.5 truncate">
                {weather?.location.name}
              </div>
              <div className="focusable w-fit text-end mt-1.5 truncate">
                {today}
              </div>
              <div className="flex">
                {weather?.current?.condition?.icon && (
                  <Image
                    src={`https:${weather.current.condition.icon}`}
                    alt="weather icon"
                    width={54}
                    height={54}
                  />
                )}
                <div className="text-xl sm:text-[28px] font-semibold flex items-center justify-center">
                  {weather?.current?.temp_c}°C
                </div>
              </div>
              <div className="w-full text-end truncate">
                {weather?.current.condition.text}
              </div>
            </div>
          </div>
        </div>
      </div>
    </FocusFrame>
  );
};
