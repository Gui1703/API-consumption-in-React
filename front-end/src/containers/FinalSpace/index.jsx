import React, { useEffect, useState } from "react";
import { Button, Container, ContainerItems, Image } from "./styles";
import axios from "axios";
import LogoFinalSpace from "../../assets/final-space.png";
import NavBar from "../../components/NavBar";

function FInalSpace() {
  const [characters, setCharacters] = useState();
  const [favorite, setFavorite] = useState();

  useEffect(() => {
    async function getAPI() {
      const { data } = await axios.get(
        "https://finalspaceapi.com/api/v0/character"
      );

      setCharacters(data);
    }
    getAPI();
  }, []);

  const favoriteCharacter = async (e) => {
    let child = e.currentTarget.parentElement.lastChild;

    console.log(e.target.value);

    if (child.style.color === "white") {
      child.style = `
          color: red;
          transition: all 0.3s ease 0s;
            `;
    } else {
      child.style = `
          color: white;
          transition-delay: 0s, 0s, 0.3s;
          `;
    }
  };

  return (
    <Container>
      <NavBar image={LogoFinalSpace} description="logo final-space" />

      {characters &&
        characters.map((user) => {
          return (
            <ContainerItems key={user.id}>
              <Image src={user.img_url} alt={user.name} />
              <p>
                <Button
                  type="submit"
                  value={user.name}
                  onClick={favoriteCharacter}
                >
                  {user.name}

                  <i className="bx bx-heart"></i>
                </Button>
              </p>
              <p>{user.gender}</p>
              <p>{user.origin}</p>
            </ContainerItems>
          );
        })}
    </Container>
  );
}

export default FInalSpace;
