import { List } from "../../ui/List";
import WatchedMovie from "./WatchedMovie";

const WatchedList = ({ watched, onDelete }) => {
  return (
    <List>
      {watched.map((movie) => (
        <WatchedMovie key={movie.id} movie={movie} onDelete={onDelete} />
      ))}
    </List>
  );
};
export default WatchedList;
