import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favoriteAgents");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favoriteAgents", JSON.stringify(favorites));
  }, [favorites]);

  function addFavorite(agent) {
    setFavorites((currentFavorites) => {
      if (currentFavorites.some((favorite) => favorite.uuid === agent.uuid)) {
        return currentFavorites;
      }

      return [...currentFavorites, agent];
    });
  }

  function removeFavorite(uuid) {
    setFavorites((currentFavorites) =>
      currentFavorites.filter((agent) => agent.uuid !== uuid)
    );
  }

  function isFavorite(uuid) {
    return favorites.some((agent) => agent.uuid === uuid);
  }

  function toggleFavorite(agent) {
    if (isFavorite(agent.uuid)) {
      removeFavorite(agent.uuid);
    } else {
      addFavorite(agent);
    }
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

FavoritesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites debe usarse dentro de FavoritesProvider");
  }

  return context;
}
