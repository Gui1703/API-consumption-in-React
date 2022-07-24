import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  ContainerItems,
  Image,
  NameAndButtonFavorite,
} from "./styles";
import axios from "axios";
import LogoFinalSpace from "../../assets/final-space.png";
import NavBar from "../../components/NavBar";

const favoritesKey = "final-space";

function FinalSpace() {
  const [characters, setCharacters] = useState();
  const [favorites, setFavorites] = useState([]);

  const loadFavoriteCharacter = () => {
    const character = JSON.parse(localStorage.getItem(favoritesKey)) || [];
    setFavorites(character);
  };

  const updateFavoriteCharacter = (name) => {
    const updatedFavorites = [...favorites];
    const favoriteIndex = favorites.indexOf(name);
    if (favoriteIndex >= 0) updatedFavorites.splice(favoriteIndex, 1);
    else updatedFavorites.push(name);

    localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  const onHeartClick = (character) => updateFavoriteCharacter(character);

  useEffect(() => {
    async function getAPI() {
      const { data } = await axios.get(
        "https://finalspaceapi.com/api/v0/character"
      );

      setCharacters(data);
    }
    getAPI();
    loadFavoriteCharacter();
  }, []);

  return (
    <Container>
      <NavBar image={LogoFinalSpace} description="logo final-space" />

      {characters &&
        characters.map((user) => {
          return (
            <ContainerItems key={user.id}>
              <Image src={user.img_url} alt={user.name} />
              <NameAndButtonFavorite>
                <p>{user.name}</p>
                <Button onClick={() => onHeartClick(user.name)}>
                  {favorites.includes(user.name) ? "❤️" : "💙"}
                </Button>
              </NameAndButtonFavorite>
              <p>{user.gender}</p>
              <p>{user.origin}</p>
            </ContainerItems>
          );
        })}
    </Container>
  );
}

export default FinalSpace;
