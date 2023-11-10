import { List } from "../../ui/List";
import Movie from "./Movie";

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <List>
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.id} onSelectMovie={onSelectMovie} />
      ))}
    </List>
  );
};
export default MovieList;
