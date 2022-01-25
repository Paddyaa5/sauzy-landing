import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
//images
import Sauzy from "../images/SauzyLogo.png";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: #10022c;
    height: 100vh;
    width: 100vw;
    background: #10022c;
    padding: 5vw;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1000px) {
        padding: 10vw 5vw;
    }
    img {
        width: 50%;
        object-fit: contain;
        margin: 50px 0px;
        max-width: 350px;
    }
    h1 {
        color: #29b6b2;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 4px;
        font-size: clamp(16px, 2.8vw, 28px);
        font-family: "Lato", sans-serif;
    }
`;

export default function Cod() {
    useEffect(() => {
        gsap.from("#logo, #main-text", {
            opacity: 0,
            skewY: 10,
            y: 100,
            duration: 0.85,
            delay: 0.15,
            stagger: 0.5,
        });
    });
    return (
        <Container>
            <img id="logo" src={Sauzy} alt="Sauzy Uk Logo" />
            <h1 id="main-text">Fiery Tomato</h1>
        </Container>
    );
}
