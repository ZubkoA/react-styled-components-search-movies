import checkImg from "../../helpers/checkImg";
import { Button } from "../../ui/Button";
import { ContWraper, PWraper } from "../../ui/ContectsWraper";
import { Img, Li } from "../../ui/List";
import { Title } from "../../ui/Title";

const WatchedMovie = ({ movie, onDelete }) => {
  return (
    <Li>
      <Img
        src={`${checkImg(movie.poster_path)}`}
        alt={`${movie.title} poster`}
      />
      <Title as="h3">{movie.title}</Title>
      <ContWraper>
        <PWraper>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </PWraper>
        <PWraper>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </PWraper>
        <PWraper>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </PWraper>

        <Button
          size="small"
          variation="delete"
          onClick={() => onDelete(movie.id)}
        >
          X
        </Button>
      </ContWraper>
    </Li>
  );
};

export default WatchedMovie;
