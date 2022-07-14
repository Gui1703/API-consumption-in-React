import React, { useEffect, useState } from "react";
import { Container, ContainerItems, Image } from "./styles";
import axios from "axios";
import LogoRickAndMorty from "../../assets/rick-and-morty.png";
import NavBar from "../../components/NavBar";

function RickAndMorty() {
  const [character, setCharacter] = useState();

  useEffect(() => {
    async function getAPI() {
      const { data } = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );

      setCharacter(data.results);
    }
    getAPI();
  }, []);

  return (
    <Container>
      <NavBar image={LogoRickAndMorty} description="logo final-space" />

      {character &&
        character.map((user) => {
          return (
            <ContainerItems key={user.id}>
              <Image src={user.image} alt={user.name} />
              <p>{user.name}</p>
              <p>{user.gender}</p>
              <p>{user.origin.name}</p>
            </ContainerItems>
          );
        })}
    </Container>
  );
}

export default RickAndMorty;
