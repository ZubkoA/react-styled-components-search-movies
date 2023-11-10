import WatchedMovie from "./WatchedMovie";

const WatchedList = ({ watched, onDelete }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie key={movie.id} movie={movie} onDelete={onDelete} />
      ))}
    </ul>
  );
};
export default WatchedList;
