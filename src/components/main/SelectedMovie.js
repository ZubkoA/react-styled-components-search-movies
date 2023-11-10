import { useState, useEffect } from "react";
import { useKey } from "../../hook/useKey";
import Loader from "../Loader";
import StarRating from "../../StarRating";
import { getMovieDetails } from "../moviesApi";
import checkImg from "../../helpers/checkImg";

const SelectedMovie = ({ selectedId, onCloseMovie, onAddWatched, watched }) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const isWatched = watched.map((movie) => movie.id).includes(selectedId);
  console.log(movie);

  const watchedUserRating = watched.find(
    (movie) => movie.id === selectedId
  )?.userRating;

  const {
    title,
    release_date: year,
    poster_path: poster,
    runtime,
    vote_average: imdbRating,
    overview: plot,
    genres,
  } = movie;
  const genresName = genres?.map((genre) => genre.name).join(", ");

  function handleAdd() {
    const newMovie = {
      id: selectedId,
      title,
      year,
      poster_path: poster,
      imdbRating: Number(imdbRating),
      runtime,
      userRating,
    };
    onAddWatched(newMovie);
    onCloseMovie();
  }

  useKey("Escape", onCloseMovie);

  useEffect(() => {
    setIsLoading(true);
    getMovieDetails(selectedId).then(({ data }) => {
      setMovie(data);

      setIsLoading(false);
    });
  }, [selectedId]);

  useEffect(() => {
    if (!title) return;
    document.title = `Movie | ${title}`;
    return function () {
      document.title = "usePopcorn";
    };
  }, [title]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="details">
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={`${checkImg(poster)}`} alt={title} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>{runtime} min</p>
              <p>{genresName}</p>
              <p>
                <span>⭐</span>
                {imdbRating} IMDb ratting
              </p>
            </div>
          </header>

          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size="24"
                    onSetRating={setUserRating}
                  />

                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add movie
                    </button>
                  )}
                </>
              ) : (
                <p>You rated this movie {watchedUserRating}</p>
              )}
            </div>

            <p>
              <em>{plot}</em>
            </p>
          </section>
        </div>
      )}
    </>
  );
};

export default SelectedMovie;

// import { useState, useEffect } from "react";
// import { useKey } from "../../hook/useKey";
// import Loader from "../Loader";
// import StarRating from "../../StarRating";

// const KEY = "f84fc31d";

// const SelectedMovie = ({ selectedId, onCloseMovie, onAddWatched, watched }) => {
//   const [movie, setMovie] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [userRating, setUserRating] = useState("");

//   const isWatched = watched.map((movie) => movie.id).includes(selectedId);

//   const watchedUserRating = watched.find(
//     (movie) => movie.id === selectedId
//   )?.userRating;

//   const {
//     title,
//     release_date: year,
//     poster_path: poster,
//     Runtime: runtime,
//     vote_average: imdbRating,
//     overview: plot,
//     Released: released,
//     Actors: actors,
//     Director: director,
//     Genre: genre,
//   } = movie;

//   // const isTop = imdbRating > 8;
//   // console.log(isTop); // the same!!!

//   function handleAdd() {
//     const newMovie = {
//       id: selectedId,
//       title,
//       year,
//       poster,
//       imdbRating: Number(imdbRating),
//       runtime: Number(runtime.split("").at(0)),
//       userRating,
//     };
//     onAddWatched(newMovie);
//     onCloseMovie();
//   }

//   useKey("Escape", onCloseMovie);

//   useEffect(() => {
//     async function getMovieDetails() {
//       setIsLoading(true);
//       const res = await fetch(
//         `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
//       );
//       const data = await res.json();
//       setMovie(data);
//       setIsLoading(false);
//     }
//     getMovieDetails();
//   }, [selectedId]);

//   useEffect(() => {
//     if (!title) return;
//     document.title = `Movie | ${title}`;
//     return function () {
//       document.title = "usePopcorn";
//     };
//   }, [title]);

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <div className="details">
//           <header>
//             <button className="btn-back" onClick={onCloseMovie}>
//               &larr;
//             </button>
//             <img src={poster} alt={title} />
//             <div className="details-overview">
//               <h2>{title}</h2>
//               <p>
//                 {released} &bull; {runtime}
//               </p>
//               <p>{genre}</p>
//               <p>
//                 <span>⭐</span>
//                 {imdbRating} IMDb ratting
//               </p>
//             </div>
//           </header>

//           <section>
//             <div className="rating">
//               {!isWatched ? (
//                 <>
//                   <StarRating
//                     maxRating={10}
//                     size="24"
//                     onSetRating={setUserRating}
//                   />

//                   {userRating > 0 && (
//                     <button className="btn-add" onClick={handleAdd}>
//                       + Add movie
//                     </button>
//                   )}
//                 </>
//               ) : (
//                 <p>You rated this movie {watchedUserRating}</p>
//               )}
//             </div>

//             <p>
//               <em>{plot}</em>
//             </p>
//             <p>Starring {actors}</p>
//             <p>Directed by {director}</p>
//           </section>
//         </div>
//       )}
//     </>
//   );
// };

// export default SelectedMovie;
