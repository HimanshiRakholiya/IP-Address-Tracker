import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import styled from "styled-components";
import { Icon } from "leaflet";

const Map = ({ coordinates }) => {
  const mapIcon = new Icon({
    iconUrl: "/path/to/icon.png", 
    iconSize: [32, 32],
  });

  const MapUpdater = ({ coordinates }) => {
    const map = useMap();
    useEffect(() => {
      map.setView([coordinates.lat, coordinates.lng], 13);
    }, [coordinates, map]);

    return null;
  };

  return (
    <MapWrapper>
      <MapContainer
        center={[coordinates.lat, coordinates.lng]}
        zoom={13}
        className="map-container"
      >
        <TileLayer
          attribution="Google Maps"
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
