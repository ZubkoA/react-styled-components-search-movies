import { useState } from "react";

import { useLocalStorageState } from "./hook/useLocalStorageState";
import { useMovies } from "./hook/useMovies";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import NavBar from "./components/navBar/NavBar";
import Logo from "./components/navBar/Logo";
import Search from "./components/navBar/Search";
import Numresults from "./components/navBar/Numresults";
import Box from "./components/main/Box";
import MovieList from "./components/main/MovieList";
import Main from "./components/main/Main";
import SelectedMovie from "./components/main/SelectedMovie";
import WatchedSummery from "./components/main/WatchedSummery";
import WatchedList from "./components/main/WatchedList";
import GlobalStyles from "./styles/GlobalStyles";

export default function App() {
  const [query, setQuery] = useState("");

  const [selectedId, setSelectedId] = useState(null);
  const { movies, isLoading, error } = useMovies(query);
  const [watched, setWatched] = useLocalStorageState([], "watched");

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }
  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.id !== id));
  }

  return (
    <>
      <GlobalStyles />
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <Numresults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <SelectedMovie
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummery watched={watched} />
              <WatchedList watched={watched} onDelete={handleDeleteWatched} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
