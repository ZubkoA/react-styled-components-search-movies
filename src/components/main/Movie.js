import checkImg from "../../helpers/checkImg";

const Movie = ({ movie, onSelectMovie }) => {
  const dateRelease = (value) =>
    `${!value ? "Unknown year" : `${value.slice(0, 4)}`}`;

  return (
    <li
      onClick={() => {
        onSelectMovie(movie.id);
      }}
    >
      <img
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
    </li>
  );
};
export default Movie;
