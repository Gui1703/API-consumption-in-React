import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  user-select: none;
  align-items: center;
  height: 100%;
  width: 100%;
  color: #000000;
  margin-top: 100px;

  /* Removing input number button and changing background and letter color in autocomplete */
  input:-webkit-autofill {
    box-shadow: 0 0 0 30px #303135 inset !important;
  }
  input:-webkit-autofill {
    -webkit-text-fill-color: #fff !important;
  }
`;

export const H1 = styled.h1`
  font-size: 25px;
  color: #fff;
`;

export const P = styled.p`
  margin: 5px 0 20px 0;
  color: #696969;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 10px 0;
  border: none;
  border-bottom: 1px solid #000000;
  padding-bottom: 8px;
  outline: none;
  background: transparent;
  color: #fff;
  padding-left: 10px;

  @media screen and (max-width: 420px) {
    width: 90%;
  }

  &:focus {
    border-bottom: 1px solid #4200ff;
  }

  &:hover {
    border-bottom: 1px solid #4200ff;
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 40px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin: 20px 0;
  background-color: #6800de;
  background-image: linear-gradient(90deg, #6800de 0%, #4200ff 50%);
  color: #ffffff;
  font-weight: bold;

  @media screen and (max-width: 420px) {
    width: 90%;
  }

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.7;
  }
`;
export const Link = styled.a`
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  color: #696969;
`;

export const Err = styled.span`
  color: #ff0000;
  font-size: 14px;
`;
