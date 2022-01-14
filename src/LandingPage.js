import React from "react";
import styled from "styled-components";
//images
import Sauzy from "./images/SauzyLogo.png";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: #10022c;
    padding: 5vw;
    .inner-container {
        height: 100%;
        width: 100%;
        display: grid;
        padding: 5vw;
        grid-template-columns: 1fr 2px 1fr;
        grid-template-rows: 1fr;
        gap: 10px 10px;
        @media screen and (max-width: 1000px) {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 2px 1fr;
        }
        .first-section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 5vw;
            img {
                width: 90%;
                object-fit: contain;
                margin: 30px 0px;
                @media screen and (max-width: 1000px) {
                    width: 80%;
                    max-width: 300px;
                }
            }

            h1 {
                color: #29b6b2;
                text-transform: uppercase;
                font-weight: 600;
                letter-spacing: 4px;
                font-size: clamp(20px, 1.5vw, 30px);
                font-family: "Lato", sans-serif;
            }
        }
        .divider {
            display: flex;
            align-items: center;
            @media screen and (max-width: 1000px) {
                justify-content: center;
            }
            div {
                height: 90%;
                width: 100%;
                background-color: #29b6b2;
                @media screen and (max-width: 1000px) {
                    height: 100%;
                    width: 90%;
                }
            }
        }
        .second-section {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            padding: 5%;
            @media screen and (max-width: 1000px) {
                padding: 0% 10%;
                justify-content: center;
            }
            h2 {
                font-size: clamp(30px, 4.5vw, 60px);
                font-family: "Lato", sans-serif;
                color: white;
                line-height: 1.2em;
                text-align: center;
            }
            .social-media {
                display: flex;
                align-items: center;
                @media screen and (max-width: 1000px) {
                    justify-content: center;
                    margin: 50px;
                }
                i {
                    color: #29b6b2;
                    font-size: clamp(30px, 2.5vw, 44px);
                    margin-right: 20px;
                }
                h3 {
                    color: #29b6b2;
                    font-size: clamp(26px, 2.5vw, 40px);
                    font-family: "Lato", sans-serif;
                    font-weight: 900;
                    font-style: italic;
                }
            }
            form {
                height: 50px;
                border: 1px solid #29b6b2;
                width: 100%;
                background-color: white;
                @media screen and (max-width: 1000px) {
                    max-width: 500px;
                    align-self: center;
                }
                input {
                    height: 100%;
                    width: 70%;
                    outline: none;
                    border: none;
                    padding: 0px 10px;
                    font-family: "Lato", sans-serif;
                    color: #10022c;
                    transition: 0.5s background-color;
                    @media screen and (max-width: 1000px) {
                        width: 60%;
                    }
                }
                input:focus {
                    background-color: rgba(41, 182, 178, 0.25);
                    transition: 0.5s background-color;
                }
                button {
                    height: 100%;
                    width: 30%;
                    background-color: #29b6b2;
                    outline: none;
                    border: none;
                    color: white;
                    font-family: "Lato", sans-serif;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    cursor: pointer;
                    transition: 0.5s filter;
                    filter: brightness(90%);
                    @media screen and (max-width: 1000px) {
                        width: 40%;
                    }
                }
                button:hover {
                    filter: brightness(110%);
                    transition: 0.5s filter;
                }
            }
        }
    }
`;

export default function LandingPage() {
    return (
        <Container>
            <div className="inner-container">
                <section className="first-section">
                    <img src={Sauzy} alt="Sauzy Uk Logo" />
                    <h1>Launching Soon</h1>
                </section>
                <section className="divider">
                    <div></div>
                </section>
                <section className="second-section">
                    <h2>Sign up to our launch notification to receive a pre-launch gift.</h2>
                    <div className="social-media">
                        <a href="https://www.instagram.com/sauzyuk/?hl=en">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <h3>#letsgetsauzy</h3>
                    </div>
                    <form
                        action="https://send.pageclip.co/HhipMveu6YSYpcc6pEjMfkZ0WzDrzUUu"
                        method="POST"
                    >
                        <input type="text" placeholder="Email address" />
                        <button type="submit">Notify Me</button>
                    </form>
                </section>
            </div>
        </Container>
    );
}
