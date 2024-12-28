import { useEffect } from "react";
import Hero from "../components/Hero";
import { useDispatch, useSelector } from "react-redux";
import { getPopular } from "../redux/actions/movieAction";
import { getGenres } from "../redux/actions/genreAction";
import Loader from "../components/Loader";
import Error from "../components/Error";
import MovieList from "../components/MovieList";

const MainPage = () => {
  const dispatch = useDispatch();
  const { isLoading, error, genres } = useSelector((store) => store.genres);
  console.log("tür:", genres);
  useEffect(() => {
    dispatch(getPopular());
    dispatch(getGenres());
  }, []);

  return (
    <div>
      <Hero />

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        genres.map((genre) => <MovieList key={genre.id} genre={genre} />)
      )}
    </div>
  );
};

export default MainPage;
