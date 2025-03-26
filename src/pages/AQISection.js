import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

const AQISection = ({ view }) => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const navigate = useNavigate(); // Initialize navigation

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

  // Function to determine background color based on AQI value
  const getAQIColor = (aqi) => {
    if (aqi <= 50) return "bg-green-400"; // Good
    if (aqi <= 100) return "bg-yellow-400"; // Moderate
    if (aqi <= 150) return "bg-orange-400"; // Unhealthy for sensitive people
    if (aqi <= 200) return "bg-red-400"; // Unhealthy
    if (aqi <= 300) return "bg-purple-400"; // Very Unhealthy
    return "bg-pink-400"; // Hazardous
  };

  const displayCities =
    view === "home" ? cities.slice(0, 4) : cities; // Top 4 for home, all for full page

  return (
    <div className="max-w-7xl mx-auto p-4 bg-white shadow-lg rounded-lg border-t-4 border-gradient-to-r from-green-400 to-blue-500">
      {/* Full Page Heading */}
      <h1 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-center shadow-md">
        {view === "home"
          ? "Top 4 Polluted Cities in Telangana"
          : ""}
      </h1>

      {/* Display Loading or Error State */}
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
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <>
          {/* Display Cities */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {displayCities.map((city, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center ${getAQIColor(
                  city.aqi
                )} text-white rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl p-6 border-4 border-white cursor-pointer`}
                onClick={() => setSelectedCity(city)}
              >
                <span className="font-semibold text-xl">{city.name}</span>
                <span className="font-bold text-xl">{city.aqi}</span>
              </div>
            ))}
          </div>

          {/* Button to Navigate to Full AQI Data */}
          {view === "home" && (
            <div className="flex justify-center mt-6">
              <button
                className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium rounded-md hover:opacity-80 transition"
                onClick={() => navigate("/telangana-aqi-data")} // Use navigate
              >
                View Telangana AQI Data
              </button>
            </div>
          )}
        </>
      )}

      {/* Modal with Selected City Information */}
      {selectedCity && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md z-50">
          <div className="relative bg-white p-6 rounded-xl shadow-2xl w-96">
            {/* Logo at the top */}
            <div className="flex justify-center mb-4">
              <img src="/images/logo.png" alt="Logo" className="w-auto h-auto" />
            </div>

            {/* Header with Gradient */}
            <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-3 rounded-t-lg text-center shadow-md">
              <h2 className="text-xl font-bold">
                {selectedCity.name} - AQI {selectedCity.aqi}
              </h2>
            </div>

            <h3 className="text-lg font-semibold text-gray-700 mt-4">
              Pollutants:
            </h3>
            {selectedCity.pollutants.length > 0 ? (
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {selectedCity.pollutants.map((pollutant, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span className="font-medium">{pollutant.name}</span>
                    <span className="text-gray-600">
                      {pollutant.concentration}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No pollutant data available.</p>
            )}

            {/* Close Button */}
            <button
              className="mt-6 w-full px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium rounded-md hover:opacity-80 transition"
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
