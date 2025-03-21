import React, { useState, useEffect } from "react";
import axios from "axios";

const AQISection = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAQIData = async () => {
    try {
      const response = await axios.get("/aqi_data.json"); // Fetch from gh-pages
      const data = response.data;

      if (data && data.length > 0) {
        const sortedCities = data
          .filter(city => city.aqi !== "N/A")
          .sort((a, b) => b.aqi - a.aqi); // Sort descending by AQI

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
    }, 300000); // Refresh every 5 minutes

    return () => clearInterval(interval);
  }, []);

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
              className="flex items-center space-x-1 bg-gray-100 text-gray-800 px-3 py-1 rounded-md shadow-sm text-sm"
            >
              <span className="font-medium">{city.name}</span>
              <span className="text-yellow-500">●</span>
              <span className="font-semibold">{city.aqi}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AQISection;
