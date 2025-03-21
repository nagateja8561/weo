import React, { useState, useEffect } from "react";
import axios from "axios";

const AQISection = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const fetchAQIData = async () => {
    try {
      const response = await axios.get("/aqi_data.json");
      const data = response.data;

      if (data && data.length > 0) {
        const sortedCities = data
          .filter((city) => city.aqi !== "N/A")
          .sort((a, b) => b.aqi - a.aqi);

        setCities(sortedCities);
      }
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch AQI data.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAQIData();
    const interval = setInterval(() => {
      fetchAQIData();
    }, 300000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (selectedCity) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [selectedCity]);

  return (
    <div className="max-w-7xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-lg font-semibold mb-4 text-gray-700 text-left">
        Which is the most polluted city in Telangana? (AQI)
      </h1>

      {loading ? (
        <div className="text-center">
          <svg
            className="animate-spin h-6 w-6 text-blue-500 mx-auto mb-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
          <p className="text-gray-500">Loading AQI data...</p>
        </div>
      ) : error ? (
        <p className="text-red-500 text-left">{error}</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-2 gap-y-3">
          {cities.map((city, index) => (
            <div
              key={index}
              className="flex items-center space-x-1 bg-gray-100 text-gray-800 px-3 py-1 rounded-md shadow-sm text-sm cursor-pointer hover:bg-gray-200 transition"
              onClick={() => setSelectedCity(city)}
            >
              <span className="font-medium">{city.name}</span>
              <span className="text-yellow-500">●</span>
              <span className="font-semibold">{city.aqi}</span>
            </div>
          ))}
        </div>
      )}

      {selectedCity && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md z-50">
          <div className="relative bg-white p-6 rounded-xl shadow-2xl w-96">
            {/* Logo at the top */}
            <div className="flex justify-center mb-3">
              <img src="/images/logo.png" alt="Logo" className="w-auto h-auto" />
            </div>

            {/* Header with Gradient */}
            <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-3 rounded-t-lg text-center shadow-md">
              <h2 className="text-lg font-bold">
                {selectedCity.name} - AQI {selectedCity.aqi}
              </h2>
            </div>

            <h3 className="text-md font-semibold text-gray-700 mt-3">
              Pollutants:
            </h3>
            {selectedCity.pollutants.length > 0 ? (
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {selectedCity.pollutants.map((pollutant, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span className="font-medium">{pollutant.name}</span>
                    <span className="text-gray-600">{pollutant.concentration}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No pollutant data available.</p>
            )}

            {/* Close Button (No X Button) */}
            <button
              className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white font-medium rounded-md hover:opacity-80 transition"
              onClick={() => setSelectedCity(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AQISection;
