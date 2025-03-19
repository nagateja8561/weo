import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AQISection = () => {
  const [aqiData, setAqiData] = useState(null);
  const [pollutionData, setPollutionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAQI = async () => {
    setLoading(true);
    setError(null);
    try {
      // Use the correct AQICN endpoint for Hyderabad
      const response = await axios.get(
        'https://api.waqi.info/feed/hyderabad/?token=ec40e7ffaa83d7bb949f27038a04637bb6cb14fc'
      );

      // Log the full response from the API
      console.log('API Response:', response);

      if (response && response.data && response.data.data) {
        const data = response.data.data;
        setAqiData(data.aqi);  // Extract AQI value
        setPollutionData({
          pm10: data.iaqi.pm10?.v ? data.iaqi.pm10.v.toFixed(1) : 'N/A',
          pm2_5: data.iaqi.pm25?.v ? data.iaqi.pm25.v.toFixed(1) : 'N/A',
          o3: data.iaqi.o3?.v ? data.iaqi.o3.v.toFixed(1) : 'N/A',
          no2: data.iaqi.no2?.v ? data.iaqi.no2.v.toFixed(1) : 'N/A',
          so2: data.iaqi.so2?.v ? data.iaqi.so2.v.toFixed(1) : 'N/A',
          co: data.iaqi.co?.v ? data.iaqi.co.v.toFixed(1) : 'N/A',
          temperature: data.iaqi.t?.v ? data.iaqi.t.v.toFixed(1) : 'N/A',  // Rounded temperature
          humidity: data.iaqi.h?.v ? data.iaqi.h.v.toFixed(1) : 'N/A',    // Rounded humidity
        });
      } else {
        setError('Invalid data received from API');
      }
    } catch (err) {
      console.error("Error fetching AQI:", err);
      setError('Failed to fetch AQI data. Please check your internet connection.');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAQI();

    const interval = setInterval(() => {
      fetchAQI();
    }, 300000);  // Refresh every 5 minutes

    return () => clearInterval(interval);
  }, []);

  const getAQICategory = (aqi) => {
    if (!aqi) return 'Unknown';
    switch (true) {
      case aqi <= 50:
        return { category: 'Good', color: 'bg-green-500', textColor: 'text-green-900' };
      case aqi <= 100:
        return { category: 'Moderate', color: 'bg-yellow-400', textColor: 'text-yellow-800' };
      case aqi <= 150:
        return { category: 'Unhealthy for Sensitive Groups', color: 'bg-orange-500', textColor: 'text-orange-900' };
      case aqi <= 200:
        return { category: 'Unhealthy', color: 'bg-red-600', textColor: 'text-red-100' };
      case aqi <= 300:
        return { category: 'Very Unhealthy', color: 'bg-purple-700', textColor: 'text-purple-100' };
      default:
        return { category: 'Hazardous', color: 'bg-black', textColor: 'text-white' };
    }
  };

  const { category, color, textColor } = getAQICategory(aqiData);

  return (
    <div className="bg-gray-50 py-16 px-8 sm:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">Air Quality Index (AQI) - Hyderabad</h2>
        {loading ? (
          <p className="text-xl text-gray-600">Loading AQI data...</p>
        ) : error ? (
          <p className="text-xl text-red-600">{error}</p>
        ) : (
          <div className="text-xl text-gray-800">
            {/* AQI Value Box with dynamic background color */}
            <div className={`p-6 rounded-lg shadow-lg mb-6 ${color} ${textColor}`}>
              <h3 className="text-3xl font-bold">Current AQI: {aqiData}</h3>
              <p className="text-2xl font-semibold mt-2">{category}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200">
                <h4 className="font-bold text-xl text-gray-800">PM10 (µg/m³)</h4>
                <p className="text-2xl font-medium text-gray-600">{pollutionData.pm10}</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200">
                <h4 className="font-bold text-xl text-gray-800">PM2.5 (µg/m³)</h4>
                <p className="text-2xl font-medium text-gray-600">{pollutionData.pm2_5}</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200">
                <h4 className="font-bold text-xl text-gray-800">Ozone (O₃) (µg/m³)</h4>
                <p className="text-2xl font-medium text-gray-600">{pollutionData.o3}</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200">
                <h4 className="font-bold text-xl text-gray-800">NO₂ (µg/m³)</h4>
                <p className="text-2xl font-medium text-gray-600">{pollutionData.no2}</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200">
                <h4 className="font-bold text-xl text-gray-800">SO₂ (µg/m³)</h4>
                <p className="text-2xl font-medium text-gray-600">{pollutionData.so2}</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200">
                <h4 className="font-bold text-xl text-gray-800">CO (µg/m³)</h4>
                <p className="text-2xl font-medium text-gray-600">{pollutionData.co}</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200">
                <h4 className="font-bold text-xl text-gray-800">Temperature (°C)</h4>
                <p className="text-2xl font-medium text-gray-600">{pollutionData.temperature}</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200">
                <h4 className="font-bold text-xl text-gray-800">Humidity (%)</h4>
                <p className="text-2xl font-medium text-gray-600">{pollutionData.humidity}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AQISection;
