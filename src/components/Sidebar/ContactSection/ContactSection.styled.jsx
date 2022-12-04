
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const pulse = keyframes`
    0% {
        -moz-box-shadow: 0 0 0 0 rgba(0, 128, 128, 0.5);
        box-shadow: 0 0 0 0 rgba(0, 128, 128, 0.4);
    }

    70% {
        -moz-box-shadow: 0 0 0 20px rgba(204, 169, 44, 0);
        box-shadow: 0 0 0 20px rgba(204, 169, 44, 0);
    }

    100% {
        -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
        box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
    }
 `



export const Img = styled.img`
width:230px;
    display: block;
    margin-left: auto;
    margin-right: auto;
`

export const Div = styled.div`
display:flex;
padding-left:20px;`

export const DivText = styled.div`
margin-left: 5px;`

export const ResumeLink = styled.a`
margin-top:17px;
display:block;
  color:${({theme})=> theme.colors.textSidebar};
  :hover{
            transform: scale(1.05) translate(2%, 0%);;
    color:${({theme}) => theme.colors.hover}
  }`

export const IconsPTell = styled.p`
margin-top:35px;
border-radius:50%;
animation: ${pulse} 1500ms infinite 750ms;`

export const P = styled.p`
border-radius:50%;
animation: ${pulse} 1500ms infinite 750ms;`