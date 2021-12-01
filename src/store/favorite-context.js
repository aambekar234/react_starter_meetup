// import { ConnectWithoutContact, Tag } from "@mui/icons-material"

// create context Object

// define component function for the above context Object. Which will act as Provider.

// Inside Provider we need to create state Object. This state object will be connected to conext object created at line 1. To do this we will create new object inside the same function called context.
// Please check the code for the Connection. This object interface will be passed to context provider as a prop

// Inside this function return context.provider Tag.

//export Context Definition and ContextProvider method

import { createContext } from "react";
import { useState } from "react";

//this is kind of abstract class which you implement in the context provider function
const FavoriteContext = createContext({
  favorites: [],
  total: 0,
  addFavorite: (meetupItem) => {},
  removeFavorite: (meetupItem) => {},
  isFavorite: (meetupItem) => {},
});

export function FavoriteContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);
  //this object and FavoriteContext Object defined outside have same definition

  const context = {
    favorites: userFavorites,
    total: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    isFavorite: isFavoriteHandler,
  };

  function addFavoriteHandler(item) {
    setUserFavorites((prev) => {
      return prev.concat(item);
    });
  }

  function removeFavoriteHandler(meetupItem) {
    setUserFavorites((prev) => {
      return prev.filter((favorite) => favorite.id !== meetupItem.id);
    });
  }
  function isFavoriteHandler(meetupItem) {
    console.log("handler is fav called");
    return userFavorites.some((item) => item.id === meetupItem.id);
  }

  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContext;
