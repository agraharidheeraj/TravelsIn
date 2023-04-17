import React from "react";
import styled from "styled-components";
import { BsLinkedin, BsYoutube, BsGithub } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai"; 

export default function Footer() {
  return (
    <FooterContainer>
      <span>Copyright &copy; 2023 TravelsIn. All rights reserved  Dheeraj Agrahari</span>
      <ul className="links">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#services">About</a>
        </li>
        <li>
          <a href="#recommend">Places</a>
        </li>
        <li>
          <a href="#aboutme">About Me</a>
        </li>
      </ul>
      <ul className="social__links">
      <li>
        <a href="https://www.youtube.com/channel/UCanIdjk1MCCERfJk7AdMoYA" target="_blank">
          <BsYoutube/>
          </a>
        </li>
        <li>
          <BsGithub/>
        </li>
        <li>
          <a href="https://www.instagram.com/dheerajagrahari700/" target="_blank">
          <AiFillInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/dheeraj-agrahari-/" target="_blank">
          <BsLinkedin />
          </a>
        </li>
      </ul>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: #d0d8ff;
  border-radius: 0.5rem;
  padding: 2.5rem;

  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        text-decoration: none;
        color: black;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
      svg {
        font-size: 1.3rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    ul {
      flex-direction: column;
    }
    .social__links {
      flex-direction: row;
    }
  }
`;
