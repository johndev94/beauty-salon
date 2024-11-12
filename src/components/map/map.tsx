import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = () => {
  const mapContainerStyle = {
    width: "50%",
    height: "400px",
  };

  const center = {
    lat: 54.11647033691406, // Replace with the latitude of your location
    lng: -9.139998435974121, // Replace with the longitude of your location
  };

  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
