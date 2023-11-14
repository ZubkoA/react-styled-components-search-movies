import { ContWraper, PWraper } from "../../ui/ContectsWraper";
import { TitleSummery, WrapSummery } from "../../ui/Summerry";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const WatchedSummery = ({ watched }) => {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <WrapSummery>
      <TitleSummery>Movies you watched</TitleSummery>
      <ContWraper type="summery">
        <PWraper>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </PWraper>
        <PWraper>
          <span>⭐️</span>
          <span>{Math.round(avgImdbRating)}</span>
        </PWraper>
        <PWraper>
          <span>🌟</span>
          <span>{Math.round(avgUserRating)}</span>
        </PWraper>
        <PWraper>
          <span>⏳</span>
          <span>{Math.round(avgRuntime)} min</span>
        </PWraper>
      </ContWraper>
    </WrapSummery>
  );
};
export default WatchedSummery;
