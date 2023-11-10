import checkImg from "../../helpers/checkImg";
import { Img, Li } from "../../ui/List";

const Movie = ({ movie, onSelectMovie }) => {
  const dateRelease = (value) =>
    `${!value ? "Unknown year" : `${value.slice(0, 4)}`}`;

  return (
    <Li
      type="movies"
      onClick={() => {
        onSelectMovie(movie.id);
      }}
    >
      <Img
        src={`${checkImg(movie.poster_path)}`}
        alt={`${movie.title} poster`}
      />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{`${dateRelease(movie.release_date)}`}</span>
        </p>
      </div>
    </Li>
  );
};
export default Movie;
