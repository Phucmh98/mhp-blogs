import axios from "axios";

const BASE_URL = "https://api.weatherapi.com/v1";
const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY as string;

export const getCurrentWeather = async (city: string) => {
    console.log(API_KEY);

    try {
        const response = await axios.get(
            `${BASE_URL}/current.json?key=${API_KEY}&q=${encodeURIComponent(city)}&lang=en`
        );
        return response.data;
    } catch (error) {
        console.error("Lỗi gọi API:", error);
        throw error;
    }
};