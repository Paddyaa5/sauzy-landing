import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
//images
import Sauzy from "./images/SauzyLogo.png";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: #10022c;
    padding: 5vw;
    overflow: hidden;
    @media screen and (max-width: 1000px) {
        padding: 10vw 5vw;
    }
    .inner-container {
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 2px 1fr;
        grid-template-rows: 1fr;
        gap: 10px 10px;
        @media screen and (max-width: 1000px) {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 20px 1fr;
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
                    max-width: 350px;
                    margin: 20px 0px;
                }
            }

            h1 {
                color: #29b6b2;
                text-transform: uppercase;
                font-weight: 600;
                letter-spacing: 4px;
                font-size: clamp(16px, 2.8vw, 28px);
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
                height: 100%;
                max-height: 600px;
                width: 100%;
                background-color: #29b6b2;
                @media screen and (max-width: 1000px) {
                    opacity: 0;
                }
            }
        }
        .second-section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 5%;
            @media screen and (max-width: 1000px) {
                justify-content: center;
            }
            a {
                text-decoration: none;
            }
            .hashtag-link {
                margin-left: 30px;
            }
            h2 {
                font-size: clamp(20px, 6vw, 40px);
                font-family: "Lato", sans-serif;
                color: white;
                line-height: 1.4em;
                @media screen and (max-width: 1000px) {
                    text-align: center;
                }
            }
            .social-media {
                display: flex;
                align-items: center;
                height: 100px;
                margin: 5vh 0px;
                @media screen and (max-width: 1000px) {
                    justify-content: center;
                    margin: 2.5vh 0px;
                }
                i {
                    background: -webkit-linear-gradient(#9be9e6, #29b6b2);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    font-size: clamp(28px, 4vw, 46px);
                    margin: 0px 10px;
                }
                h3 {
                    font-size: clamp(18px, 4vw, 40px);
                    font-family: "Condiment", cursive;
                    cursor: pointer;
                    text-decoration: none;
                    color: #29b6b2;
                }
                h3 span {
                    font-size: clamp(34px, 3.5vw, 46px);
                }
                i {
                    text-decoration: none;
                    background: -webkit-linear-gradient(#9be9e6, #29b6b2);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    transition: 0.5s filter;
                    filter: brightness(90%);
                    &:hover {
                        text-decoration-color: rgba(38, 182, 179, 0.5);
                        transition: 0.5s text-decoration-color;
                        filter: brightness(110%);
                    }
                }
            }
            form {
                height: 65px;
                width: 100%;
                background-color: white;
                border-radius: 3px;
                overflow: hidden;
                @media screen and (max-width: 1000px) {
                    max-width: 500px;
                    align-self: center;
                    border-radius: 0px;
                }
                input {
                    height: 100%;
                    width: 70%;
                    outline: none;
                    border: none;
                    border: 3px solid #29b6b2;
                    padding: 0px 10px;
                    font-family: "Lato", sans-serif;
                    color: #10022c;
                    transition: 0.5s background-color;
                    font-size: clamp(12px, 2.5vw, 20px);
                    filter: brightness(90%);
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
                    border: 3px solid #29b6b2;
                    width: 30%;
                    font-size: clamp(12px, 2.5vw, 20px);
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
                        letter-spacing: 1px;
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
    let tl = gsap.timeline();

    useEffect(() => {
        tl.from("#divider-line", {
            duration: 0.85,
            opacity: 0,
            width: "0%",
            height: "0%",
            ease: "circ.Out",
        })
            .from("#logo, #main-text", {
                opacity: 0,
                skewY: 10,
                y: 100,
                duration: 0.85,
                delay: 0.15,
                stagger: 0.5,
            })
            .from(".second-section", {
                duration: 0.85,
                opacity: 0,
                x: 50,
                delay: "-0.5",
            });
    });
    return (
        <Container>
            <div className="inner-container">
                <section className="first-section">
                    <img id="logo" src={Sauzy} alt="Sauzy Uk Logo" />
                    <h1 id="main-text">Launching Soon</h1>
                </section>
                <section className="divider">
                    <div id="divider-line"></div>
                </section>
                <section className="second-section">
                    <h2>Sign up to our launch notification to receive a pre-launch gift.</h2>
                    <div className="social-media">
                        <a href="https://www.instagram.com/sauzyuk/?hl=en">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.tiktok.com/@sauzyuk">
                            <i className="fab fa-tiktok"></i>
                        </a>
                        <a href="https://www.facebook.com/sauzyuk">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/explore/tags/letsgetsauzy/"
                            className="hashtag-link"
                        >
                            <h3>
                                <span>#</span>letsgetsauzy
                            </h3>
                        </a>
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
