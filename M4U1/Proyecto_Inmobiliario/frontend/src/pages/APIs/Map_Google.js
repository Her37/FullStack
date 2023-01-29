import { useMemo } from "react";
import '../APIs/Mapa.css';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function () {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBQ1l7ysMKwT7-sszDO76V2IDiNxvRdrSU",
    });

    if (!isLoaded) return <div>Loading..</div>;
    return <GMapContainer />;
}

function GMapContainer() {
    return (
        <div  id="map"  style={{height: "500px", width: "800px"}}>
            <GMap />
        </div>
    )
};

function GMap() {
    return (
        <GoogleMap zoom={10} center={{ lat: 44, lng: -80 }} style={{height: "100%", width: "100%"}}/>
    )
};
