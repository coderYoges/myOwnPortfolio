import React from "react";
import styled from "styled-components";

const ContainerLayout = styled.div`
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIB6oNfuantZVINanxjqZk6Bjf7qSZCbedWA&usqp=CAU");
`;

const StyledLayout = styled.div`
  margin: 0 10vw;
  background-color: #e7e4b6;
  min-height: 100vh;
`;

export const Layout = () => {
  return (
    <ContainerLayout>
      <StyledLayout>Hi from Layout</StyledLayout>
    </ContainerLayout>
  );
};
