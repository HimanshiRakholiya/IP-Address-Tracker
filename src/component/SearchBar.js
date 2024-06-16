import React, { useState } from "react";
import styled from "styled-components";
import { MdOutlineChevronRight } from "react-icons/md";

const SearchBar = ({ setIPAddress, fetchLocation }) => {
  const [ipAddress, setIpAddress] = useState("");

  const handleClick = () => {
    setIPAddress(ipAddress);
    fetchLocation(ipAddress);
  };

  return (
    <Wrapper className="search-bar-container">
      <h2>IP Address Tracker</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter the IP Address here.."
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
        />
        <div className="icon-container" onClick={handleClick}>
          <MdOutlineChevronRight />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 20%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  background-size: cover;

  h2 {
    color: white;
    font-size:30px;
    font-weight: bold;
  }

  .input-container {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;

    @media (min-width: 1024px) {
      width: 33%;
    }

    input {
      width: 80%;
      height: 100%;
      border-radius: 5px;
      border: 1px solid black;
      padding: 0 10px;
      background-color: #f5f5f5;
    }

    .icon-container {
      width: 56px;
      height: 100%;
      background-color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      cursor: pointer;

      svg {
        padding: 5px;
        color: white;
      }
    }
  }
`;

export default SearchBar;
