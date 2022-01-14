import React from "react";
import styled from "styled-components";
//images
import Sauzy from "./images/SauzyLogo.png";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: #10022c;
    img {
        width: 300px;
        object-fit: contain;
    }
    h1 {
        color: #29b6b2;
    }
`;

export default function LandingPage() {
    return (
        <Container>
            <h1>Sauzy</h1>
            <img src={Sauzy} alt="Sauzy Uk Logo" />
        </Container>
    );
}
