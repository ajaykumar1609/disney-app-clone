import React from "react";
import styled from "styled-components";

function login() {
  return <Container>Login</Container>;
}

export default login;

const Container = styled.div`
  position: relative;
  height: calc(100vh);

  &:before {
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-repeat:no-repeat;
    position:absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: "";
    z-index: -1;
  }
`;
