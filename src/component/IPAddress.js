import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Stats from "./Stats";
import Map from "./Map";
import styled from "styled-components";

const IPAddress = () => {
  const [IPAddress, setIPAddress] = useState("");
  const [location, setLocation] = useState("");
  const [timezone, setTimezone] = useState("");
  const [ISP, setISP] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: 27.5035,
    lng: 77.67215,
  });

  const fetchLocation = (ipAddress = "") => {
    fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_UImkNdx6KD6qT7VDI6L0LLKlYVDkC&ipAddress=${ipAddress}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIPAddress(data.ip);
        setLocation(
          `${data.location.city}, ${data.location.country} ${data.location.postalCode}`
        );
        setTimezone(`UTC ${data.location.timezone}`);
        setISP(data.isp);
        setCoordinates({
          lat: data.location.lat,
          lng: data.location.lng,
        });
      });
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <Wrapper>
      <SearchBar setIPAddress={setIPAddress} fetchLocation={fetchLocation} />
      <Stats
        ipAddress={IPAddress}
        location={location}
        timezone={timezone}
        isp={ISP}
      />
      <Map coordinates={coordinates} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 170vh;
  position: relative;
`;

export default IPAddress;
