import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AQISection = () => {
  const [hyderabadAQI, setHyderabadAQI] = useState(null);
  const [indiaAQI, setIndiaAQI] = useState(null);
  const [hyderabadData, setHyderabadData] = useState(null);
  const [indiaData, setIndiaData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAQI = async (city, setAQI, setData) => {
    try {
      const response = await axios.get(
        `https://api.waqi.info/feed/${city}/?token=ec40e7ffaa83d7bb949f27038a04637bb6cb14fc`
      );

      if (response?.data?.data) {
        const data = response.data.data;
        setAQI(data.aqi);
        setData({
          pm10: data.iaqi.pm10?.v ? data.iaqi.pm10.v.toFixed(1) : 'N/A',
          pm2_5: data.iaqi.pm25?.v ? data.iaqi.pm25.v.toFixed(1) : 'N/A',
          o3: data.iaqi.o3?.v ? data.iaqi.o3.v.toFixed(1) : 'N/A',
          no2: data.iaqi.no2?.v ? data.iaqi.no2.v.toFixed(1) : 'N/A',
          so2: data.iaqi.so2?.v ? data.iaqi.so2.v.toFixed(1) : 'N/A',
          co: data.iaqi.co?.v ? data.iaqi.co.v.toFixed(1) : 'N/A',
          temperature: data.iaqi.t?.v ? data.iaqi.t.v.toFixed(1) : 'N/A',
          humidity: data.iaqi.h?.v ? data.iaqi.h.v.toFixed(1) : 'N/A',
        });
      } else {
        setError('Invalid data received from API');
      }
    } catch (err) {
      setError('Failed to fetch AQI data.');
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchAQI('hyderabad', setHyderabadAQI, setHyderabadData);
    fetchAQI('india', setIndiaAQI, setIndiaData);

    const interval = setInterval(() => {
      fetchAQI('hyderabad', setHyderabadAQI, setHyderabadData);
      fetchAQI('india', setIndiaAQI, setIndiaData);
    }, 300000);

    return () => clearInterval(interval);
  }, []);

  const getAQICategory = (aqi) => {
    if (!aqi) return { category: 'Unknown', color: 'bg-gray-400', textColor: 'text-gray-800' };
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

  return (
    <div className="bg-gray-50 pt-20 px-6 sm:px-16 min-h-screen"> {/* pt-20 to prevent overlap */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {[{ city: 'Hyderabad', aqi: hyderabadAQI, data: hyderabadData }, { city: 'India', aqi: indiaAQI, data: indiaData }].map(({ city, aqi, data }, index) => {
          const { category, color, textColor } = getAQICategory(aqi);

          return (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 w-full h-full flex flex-col">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-4">{`Air Quality Index (AQI) - ${city}`}</h2>
              {loading ? (
                <p className="text-xl text-gray-600 text-center flex-grow">Loading AQI data...</p>
              ) : error ? (
                <p className="text-xl text-red-600 text-center flex-grow">{error}</p>
              ) : (
                <div className="flex flex-col flex-grow">
                  <div className={`p-6 rounded-lg shadow-md text-center ${color} ${textColor}`}>
                    <h3 className="text-4xl font-bold">{aqi}</h3>
                    <p className="text-2xl font-semibold mt-2">{category}</p>
                  </div>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {data && Object.entries(data).map(([key, value]) => (
                      <div key={key} className="p-4 bg-gray-100 rounded-lg text-center shadow">
                        <h4 className="font-semibold text-gray-800 capitalize">{key.replace(/_/g, ' ')}</h4>
                        <p className="text-lg font-medium text-gray-600">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AQISection;
