#!/bin/bash

# Define API URLs
STATE_API_URL="https://website-api.airvisual.com/v1/cities/by/stateID/XT8cdvjdp7ytofBAB"
OUTPUT_FILE="aqi_data.json"

# Fetch city list
CITY_DATA=$(curl -s "$STATE_API_URL")

if [ -z "$CITY_DATA" ] || [ "$CITY_DATA" == "null" ]; then
  echo "Failed to fetch city data"
  exit 1
fi

# Process AQI data for each city
CITY_AQI_DATA="["
for CITY_ID in $(echo "$CITY_DATA" | jq -r '.[].id'); do
  CITY_API_URL="https://website-api.airvisual.com/v1/cities/$CITY_ID"
  CITY_RESPONSE=$(curl -s "$CITY_API_URL")
  
  CITY_NAME=$(echo "$CITY_DATA" | jq -r ".[] | select(.id == \"$CITY_ID\") | .name")
  AQI=$(echo "$CITY_RESPONSE" | jq '.current.aqi' 2>/dev/null || echo "N/A")

  CITY_AQI_DATA+="{\"id\": \"$CITY_ID\", \"name\": \"$CITY_NAME\", \"aqi\": \"$AQI\"},"
done

# Remove trailing comma and close JSON array
CITY_AQI_DATA="${CITY_AQI_DATA%?}]"

# Save JSON output
echo "$CITY_AQI_DATA" | jq . > "$OUTPUT_FILE"

echo "AQI data saved to $OUTPUT_FILE"
