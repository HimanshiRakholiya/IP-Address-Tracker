import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import styled from "styled-components";
import L from "leaflet";

const Map = ({ coordinates }) => {
  const mapIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41], 
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
  });

  const MapUpdater = ({ coordinates }) => {
    const map = useMap();
    useEffect(() => {
      if (coordinates?.lat && coordinates?.lng) {
        map.setView([coordinates.lat, coordinates.lng], 13);
      }
    }, [coordinates, map]);

    return null;
  };

  return (
    <MapWrapper>
      <MapContainer
        center={[coordinates.lat, coordinates.lng]}
        zoom={13}
        className="map-container"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[coordinates.lat, coordinates.lng]} icon={mapIcon} />
        <MapUpdater coordinates={coordinates} />
      </MapContainer>
    </MapWrapper>
  );
};

const MapWrapper = styled.section`
  width: 100%;
  flex-grow: 1;
  z-index: 0;

  .map-container {
    width: 100%;
    height: 100%;
  }
`;

export default Map;
