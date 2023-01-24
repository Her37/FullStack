import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";


export default function GMap() {
    const { } = useLoadScript({
        GoogleMapsApiKey: "AIzaSyBQ1l7ysMKwT7-sszDO76V2IDiNxvRdrSU",
    });

    return <GoogleMap zoom={10} center={{ lat: 44, lng: -80 }}>Map </GoogleMap>

};


