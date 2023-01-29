// import { useMemo } from "react";
import '../APIs/Mapa.css';
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

export default function () {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBQ1l7ysMKwT7-sszDO76V2IDiNxvRdrSU",
    });
    if (!isLoaded) return <div>Loading..</div>;
    return <GMapContainer />;
}

function GMapContainer() {
    return (
        <div id="map-container">
            <GMap />
        </div>
    )
};

export function GMap() {
    return (
        <GoogleMap zoom={10} center={{ lat: -34.6, lng: -58.4 }}>
            <div id="map"></div>
        </GoogleMap>
    )
};
