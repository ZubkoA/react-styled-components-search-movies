import checkImg from "../../helpers/checkImg";
import { ContWraper } from "../../ui/ContectsWraper";
import { Img, Li } from "../../ui/List";
import { Title } from "../../ui/Title";

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
      <Title as="h3">{movie.title}</Title>
      <ContWraper>
        <span>🗓</span>
        <span>{`${dateRelease(movie.release_date)}`}</span>
      </ContWraper>
    </Li>
  );
};
export default Movie;
