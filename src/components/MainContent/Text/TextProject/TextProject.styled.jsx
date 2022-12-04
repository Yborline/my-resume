import styled from "@emotion/styled";

export const ProjectLink = styled.a`
color:${({ theme }) => theme.colors.textMain};

font-weight:bold;
:hover{
    color:${({ theme }) => theme.colors.hoverMain};

}`