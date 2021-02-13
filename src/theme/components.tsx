import React from "react";
import {Container} from "react-bootstrap";
import styled from "styled-components";

export const ContainerVCenter = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: calc(100vh - 130px);
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
`

export const FeedContainerTitle = styled(ContainerTitle)`
  max-width: 600px;
  
`;


export const HBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  text-align: center;
`;

export const VSpace = styled.div`
  margin-top: ${({ height }: { height: number }) => height}px;
`;

export const RoundedImage = styled.img`
  border-radius: 50%;
`;

export const Statement = styled.h3`
  font-weight: 400;
  margin-top: 15px;
`;
