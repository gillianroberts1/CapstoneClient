import React from "react";
import styled from "styled-components";
import "./css/Home.css";

const Paragraph = styled.p`
  text-align: center;
  background: #419197;
  padding: 2em;
  color: white;
  margin: 0;
  margin-top: 20px;
  bottom: 0px;
  position: fixed;
  width: 100%;
  font-size: small;
  @media (max-width: 768px) {
    padding: 1em;
    font-size: x-small;}
`;

const Footer = () => {
  return (
    <Paragraph>
      Wiggle Waggle Walks™ is a trademark of Wiggle Waggle Walks International
      Limited. ©2023 Wiggle Waggle Walks International Limited. All Rights
      Reserved.
    </Paragraph>
  );
};

export default Footer;
