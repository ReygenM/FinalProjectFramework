import React from "react";
import styled from 'styled-components';

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;
const StatBlock = styled.div`
  background: #f2f2f2;
  font-size: 2rem;
  padding: 2rem;
  border-radius: 3rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
`;

const Display = ({ data: { confirmed, recovered, deaths }, country }) => {
  if (!confirmed) {
    return "";
  }

  return (
    <StatGrid>
      {/* <h2>{country ? `Negara: ${country}` : `Global`}</h2> */}
      <StatBlock>
        <h5 style={{textAlign:'center'}}>Positif</h5>
        <h5 style={{textAlign:'center'}}>{confirmed.value}</h5>
      </StatBlock>
      <StatBlock>
        <h5 style={{textAlign:'center'}}>Meninggal</h5>
        <h5 style={{textAlign:'center'}}>{deaths.value}</h5>
      </StatBlock>
      <StatBlock>
        <h5 style={{textAlign:'center'}}>Sembuh</h5>
        <h5 style={{textAlign:'center'}}>{recovered.value}</h5>
      </StatBlock>
    </StatGrid>
  );
};

export default Display;

