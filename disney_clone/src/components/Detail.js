import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg" />
      </Background>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>+</AddButton>
      </Controls>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh-70px);
  padding: calc(3.5vw + 5px);
  position: relative;
  z-index: -1;
`;
const Background = styled.div`
    position: fixed;
    top:70px;
    bottom:0;
    left:0;
    right:0;
    z-index:-1;
    img{
        width:100%;
        height:100%:
        object-fit:cover;
    }
`;
const Controls = styled.div`
  display: flex;
  align-items:center;
`;
const PlayButton = styled.button`
  margin-right: 35px;
  padding: 0 14px;
  display: flex;
  align-items: center;
  border-radius: 7px;
  font-size: 15px;
  height: 56px;
  text-align: center;
  cursor: pointer;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background:rgba(255,255,255,0.7);
  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
    background:rgba(0,0,0,0.6);
    border:1px solid rgb(255,255,255);
    color:rgb(255,255,255);

`;

const AddButton = styled.button`
  font-size: 25px;
  margin: 0px;
  padding:7px 14.7px;
  border-radius: 50%;
  background:rgba(255,255,255,0.7)
`;
