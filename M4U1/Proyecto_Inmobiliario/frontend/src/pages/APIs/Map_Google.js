// import { useMemo } from "react";
import '../APIs/Mapa.css';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Mapa(lat, lng) {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBQ1l7ysMKwT7-sszDO76V2IDiNxvRdrSU",
  });
  if (!isLoaded) return <div>Loading..</div>;

  return <GoogleMap zoom={10} center={{ lat: lat, lng: lng }}>
    <div id="map"></div>

    <Marker position={{ lat: -34.6, lng: -58.4 }} />;
  </GoogleMap>;

}

