import React from "react";
import NavBar from "../../components/NavBar";
import { Container, Image } from "./styles";
import FinalSpace from "../../assets/final-space.png";
import RickAndMorty from "../../assets/rick-and-morty.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function navigateTo(url) {
    navigate(`/${url}`);
  }

  return (
    <Container>
      <NavBar />

      <Image
        src={FinalSpace}
        alt="logo final-space"
        onClick={() => navigateTo("final-space")}
      />

      <Image
        src={RickAndMorty}
        alt="logo rick-and-morty"
        onClick={() => navigateTo("rick-and-morty")}
      />
    </Container>
  );
}

export default Home;
