import React from "react";
import styled from "styled-components";

const Stats = ({ ipAddress, location, timezone, isp }) => {
  return (
    <Wrapper>
      <StatItem>
        <p className="label">IP Address</p>
        <p className="value">{ipAddress}</p>
      </StatItem>
      <StatItem>
        <p className="label">Location</p>
        <p className="value">{location}</p>
      </StatItem>
      <StatItem>
        <p className="label">Timezone</p>
        <p className="value">{timezone}</p>
      </StatItem>
      <StatItem>
        <p className="label">ISP</p>
        <p className="value">{isp}</p>
      </StatItem>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 80%;
  border-radius: 1rem;
  position: absolute;
  top: 18%; /* adjust according to your layout */
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2.5rem;
    padding: 2rem;
  }
`;

const StatItem = styled.section`
  width: 100%;
  border-bottom: 2px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }

  @media (min-width: 768px) {
    border-right: 2px solid #e2e8f0;
    border-bottom: none;

    &:last-child {
      border-right: none;
    }
  }

  .label {
    font-size: 0.875rem;
    color: #64748b;
    font-weight: 600;
  }

  .value {
    font-size: 1.25rem;
    color: #000000;
    font-weight: 700;
  }
`;

export default Stats;
