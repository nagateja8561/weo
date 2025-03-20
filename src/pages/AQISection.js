import React, { useState, useEffect } from "react";
import axios from "axios";

const AQISection = () => {
  const [hyderabadAQI, setHyderabadAQI] = useState(null);
  const [indiaAQI, setIndiaAQI] = useState(null);
  const [hyderabadData, setHyderabadData] = useState(null);
  const [indiaData, setIndiaData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch AQI Data Function
  const fetchAQI = async (city, setAQI, setData) => {
    try {
      const response = await axios.get(
        `https://api.waqi.info/feed/${city}/?token=ec40e7ffaa83d7bb949f27038a04637bb6cb14fc`
      );

      if (response?.data?.data) {
        const data = response.data.data;
        setAQI(data.aqi);
        setData({
          pm10: data.iaqi.pm10?.v ? data.iaqi.pm10.v.toFixed(1) : "N/A",
          pm2_5: data.iaqi.pm25?.v ? data.iaqi.pm25.v.toFixed(1) : "N/A",
          o3: data.iaqi.o3?.v ? data.iaqi.o3.v.toFixed(1) : "N/A",
          no2: data.iaqi.no2?.v ? data.iaqi.no2.v.toFixed(1) : "N/A",
          so2: data.iaqi.so2?.v ? data.iaqi.so2.v.toFixed(1) : "N/A",
          co: data.iaqi.co?.v ? data.iaqi.co.v.toFixed(1) : "N/A",
          temperature: data.iaqi.t?.v ? data.iaqi.t.v.toFixed(1) : "N/A",
          humidity: data.iaqi.h?.v ? data.iaqi.h.v.toFixed(1) : "N/A",
        });
      } else {
        setError("Invalid data received from API");
      }
    } catch (err) {
      setError("Failed to fetch AQI data.");
    }
  };

  // Fetch Data on Mount
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); // Reset error state before fetching data

      await Promise.all([
        fetchAQI("hyderabad", setHyderabadAQI, setHyderabadData),
        fetchAQI("india", setIndiaAQI, setIndiaData),
      ]);

      setLoading(false);
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 300000); // Fetch every 5 minutes

    return () => clearInterval(interval);
  }, []);

  // Get AQI Category
  const getAQICategory = (aqi) => {
    if (!aqi)
      return {
        category: "Unknown",
        color: "bg-gray-400",
        textColor: "text-gray-800",
      };
    switch (true) {
      case aqi <= 50:
        return {
          category: "Good",
          color: "bg-green-500",
          textColor: "text-green-900",
        };
      case aqi <= 100:
        return {
          category: "Moderate",
          color: "bg-yellow-400",
          textColor: "text-yellow-800",
        };
      case aqi <= 150:
        return {
          category: "Unhealthy for Sensitive Groups",
          color: "bg-orange-500",
          textColor: "text-orange-900",
        };
      case aqi <= 200:
        return {
          category: "Unhealthy",
          color: "bg-red-600",
          textColor: "text-red-100",
        };
      case aqi <= 300:
        return {
          category: "Very Unhealthy",
          color: "bg-purple-700",
          textColor: "text-purple-100",
        };
      default:
        return {
          category: "Hazardous",
          color: "bg-black",
          textColor: "text-white",
        };
    }
  };

  return (
    <div className="bg-gray-50 pt-20 px-2 sm:px-4 md:px-8 min-h-screen">
      {loading ? (
        <div className="text-center py-10">
          <p className="text-xl text-gray-600">Loading AQI data...</p>
        </div>
      ) : error ? (
        <div className="text-center py-10">
          <p className="text-xl text-red-600">{error}</p>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            { city: "Hyderabad", aqi: hyderabadAQI, data: hyderabadData },
            { city: "India", aqi: indiaAQI, data: indiaData },
          ].map(({ city, aqi, data }, index) => {
            const { category, color, textColor } = getAQICategory(aqi);

            return (
              <div
                key={index}
                className={`shadow-lg rounded-lg overflow-hidden p-4 flex flex-col ${color} ${textColor}`}
              >
                <div className="flex-grow">
                  <div className={`p-6 text-center`}>
                    {/* Dynamically include AQI in city name */}
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                      {`${city} (AQI: ${aqi ?? "N/A"})`}
                    </h2>
                    <div className={`text-4xl font-semibold my-2`}>{aqi}</div>
                    <p className="text-lg font-medium">{category}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 p-4 sm:gap-4">
                    {data &&
                      Object.entries(data).map(([key, value]) => (
                        <div
                          key={key}
                          className="p-2 sm:p-4 bg-gray-100 rounded-lg text-center shadow"
                        >
                          <h4 className="text-sm sm:text-base font-semibold capitalize">
                            {key.replace(/_/g, " ")}
                          </h4>
                          <p className="text-sm sm:text-lg font-medium">
                            {value}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AQISection;
