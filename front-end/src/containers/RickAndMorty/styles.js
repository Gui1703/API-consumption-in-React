import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 30px;
  padding-top: 80px;
  color: #fff;

  @media screen and (max-width: 630px) {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerItems = styled.div`
  flex: 1 1 100px;
  margin: 10px 0;

  p {
    font-size: 18px;
    padding-top: 5px;
    padding-left: 10px;
  }

  p +p {
    padding-right: 30px;
  }
`;

export const Image = styled.img`
  border-radius: 10px;
`;
