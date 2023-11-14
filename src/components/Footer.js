import React from 'react';

import styled from "styled-components";

const Paragraph = styled.p`
text-align: center;
background:#419197;
padding:2em;
color: white;
margin:0;
margin-top:20px;
bottom: 0px;
position: fixed;
width: 100%;
font-size: small;
`

const Footer = () => {
    return ( 



        <Paragraph>Wiggle Waggy Walks™ is a trademark of Wiggle Waggy Walks International Limited. 
         ©2023 Wiggle Waggy Walks International Limited. All Rights Reserved.</Paragraph>
     );
}
 
export default Footer;