
import styled from "@emotion/styled";
import { pulse } from "../../../animations/animations";





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