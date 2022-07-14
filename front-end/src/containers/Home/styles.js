import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

export const Image = styled.img`
  width: 400px;
  height: 250px;
  border-radius: 10px;
  cursor: pointer;

  @media screen and (max-width: 450px) {
    width: 90%;
    height: 90%;
  }

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;
