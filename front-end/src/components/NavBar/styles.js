import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  padding: 15px;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const Logo = styled.img`
  width: 100px;
  border-radius: 5px;
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  transition: all 0.2s ease 0s;
  outline: 0;
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
  }
`;

export const LineMenu = styled.span`
  display: block;
  width: 40px;
  height: 2px;
  background: #fff;
  margin-block: 8px;
  border-radius: 4px;
  transition: transform 0.5s, opacity 0.25s;
`;

export const Menu = styled.div`
  display: flex;
  color: #fff;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 0;
    visibility: hidden;
    overflow: hidden;
    transition: all 0.2s ease 0s;
    background-color: #1d1d1d;
    border-radius: 0 0 10px 10px;
    margin-top: 10px;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 25px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`;

export const Li = styled.li`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
