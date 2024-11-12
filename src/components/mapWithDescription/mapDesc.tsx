import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import "./mapDesc.css";

interface MapWithDescriptionProps {
  lat: number; // Latitude for the map location
  lng: number; // Longitude for the map location
  description: React.ReactNode;
}

const MapWithDescription: React.FC<MapWithDescriptionProps> = ({
  lat,
  lng,
  description,
}) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // Replace with your Google Maps API key
  });

  if (!isLoaded) {
    return <div>Loading map...</div>;
  }

  return (
    <div className="map-with-description">
      <div className="map-container">
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "600px" }}
          center={{ lat, lng }}
          zoom={12}
        >
          <Marker position={{ lat, lng }} />
        </GoogleMap>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MapWithDescription;
