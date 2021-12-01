import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import AllMeetupsPage from "./page/AllMeetups";
import FavoritesPage from "./page/Favorites";
import NewMeetupPage from "./page/NewMeetup";
import { FavoriteContextProvider } from "./store/favorite-context";

function App() {
  return (
    <div className="App">
      <FavoriteContextProvider>
        <Router>
          <MainNavigation PageTitle="Available Meetups!" />
          <Routes>
            <Route path="/" exact element={<AllMeetupsPage />} />

            <Route path="/favorites" exact element={<FavoritesPage />} />

            <Route path="/new" exact element={<NewMeetupPage />} />
          </Routes>
        </Router>
      </FavoriteContextProvider>
    </div>
  );
}

export default App;
