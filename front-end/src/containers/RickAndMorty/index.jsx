import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  ContainerItems,
  Image,
  NameAndButtonFavorite,
} from "./styles";
import axios from "axios";
import LogoRickAndMorty from "../../assets/rick-and-morty.png";
import NavBar from "../../components/NavBar";

const favoritesKey = "rick-and-morty";

function RickAndMorty() {
  const [character, setCharacter] = useState();
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
        "https://rickandmortyapi.com/api/character"
      );

      setCharacter(data.results);
    }
    getAPI();
    loadFavoriteCharacter();
  }, []);

  return (
    <Container>
      <NavBar image={LogoRickAndMorty} description="logo final-space" />

      {character &&
        character.map((user) => {
          return (
            <ContainerItems key={user.id}>
              <Image src={user.image} alt={user.name} />
              <NameAndButtonFavorite>
                <p>{user.name}</p>
                <Button onClick={() => onHeartClick(user.name)}>
                  {favorites.includes(user.name) ? "❤️" : "💙"}
                </Button>
              </NameAndButtonFavorite>
              <p>{user.gender}</p>
              <p>{user.origin.name}</p>
            </ContainerItems>
          );
        })}
    </Container>
  );
}

export default RickAndMorty;
