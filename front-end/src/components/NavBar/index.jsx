import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Li, LineMenu, Logo, Menu, Nav, Ul } from "./styles";

function NavBar(props) {
  const navigate = useNavigate();

  function navigateTo(url) {
    navigate(`/${url}`);
  }

  function menuIsActive(e) {
    let child = e.currentTarget.parentElement.lastChild;
    let icon = e.currentTarget.childNodes;

    if (child.style.visibility === "hidden" || child.style.visibility === "") {
      child.style = `
            visibility: visible;
            transition: all 0.3s ease 0s;
            max-height: 250px;
            `;

      icon[0].style = `
          transform: translateY(13px) rotate(45deg);
            `;

      icon[1].style = `
          opacity: 0;
        `;

      icon[2].style = `
          transform: translateY(-13px) rotate(-45deg);
    `;
    } else {
      child.style = `
            visibility: hidden;
            transition-delay: 0s, 0s, 0.3s;
            max-height: 0px;
          `;
      icon[0].style = `
        background: #FFF
      `;

      icon[1].style = `
        background: #FFF
      `;

      icon[2].style = `
        background: #FFF
      `;
    }
  }

  return (
    <Nav>
      <Logo src={props.image} alt={props.description} />
      <Button onClick={menuIsActive}>
        <LineMenu></LineMenu>
        <LineMenu></LineMenu>
        <LineMenu></LineMenu>
      </Button>
      <Menu>
        <Ul>
          <Li onClick={() => navigateTo("")}>Home</Li>
          <Li onClick={() => navigateTo("final-space")}>FInal Space</Li>
          <Li onClick={() => navigateTo("rick-and-morty")}>RIck and Morty</Li>
        </Ul>
      </Menu>
    </Nav>
  );
}

export default NavBar;
