import React from "react";
import styled from "styled-components";

function viewers() {
  return <Container>
    <Wrap>
        <img src="/images/viewers-disney.png"/>
    </Wrap>
    <Wrap>
        <img src="/images/viewers-disney.png"/>
    </Wrap>
    <Wrap>
        <img src="/images/viewers-disney.png"/>
    </Wrap>
    <Wrap>
        <img src="/images/viewers-disney.png"/>
    </Wrap>
    <Wrap>
        <img src="/images/viewers-disney.png"/>
    </Wrap>
  </Container>;
}

export default viewers;

const Container = styled.div`
    margin-top: 30px;
    padding:20px 0 20px 0;
    display: grid;
    grid-gap: 12px;
    grid-template-columns: repeat(5,minmax(0,1fr));
    //box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    border-radius:10px;

`;
const Wrap = styled.div`
    //box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 2px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
    box-shadow: rgba(255, 255, 255, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    border-radius: 10px;
    transition:all 300ms;
    img{
        width:100%;
        height:100%;
        object-fit: cover;
    }
    &:hover{
        //box-shadow: rgba(255, 255, 255, 255) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
        box-shadow: rgba(68, 68, 69, 0.56) 0px 22px 70px 4px;
        transform: scale(1.07);
        cursor:pointer;
    }
` 