import styled from "@emotion/styled";
import { pulse } from "../../../../animations/animations";

export const ProjectLink = styled.a`
color:${({ theme }) => theme.colors.textMain};
    border-radius:25%;

font-weight:bold;
:hover{
    color:${({ theme }) => theme.colors.hoverMain};

animation: ${pulse} 1500ms infinite 150ms;
}`


export const Div = styled.div`
margin-bottom: 15px;
&:nth-last-of-type(1){
   margin-bottom: 0px; 
}
`