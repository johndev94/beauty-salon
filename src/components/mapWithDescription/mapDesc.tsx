import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import "./MapDesc.css";

interface MapDescProps {
  lat: number; // Latitude for the map location
  lng: number; // Longitude for the map location
  description: React.ReactNode;
}

const MapDesc: React.FC<MapDescProps> = ({ lat, lng, description }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "", // Replace with your Google Maps API key
  });

  if (!isLoaded) {
    return <div>Loading map...</div>;
  }

  return (
    <div className="map-with-description">
      <div className="map-container">
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "500px" }}
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

export default MapDesc;
