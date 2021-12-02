import Evaluation from 'components/Evaluation';
import Comment from 'components/Comment';
import { useParams } from 'react-router-dom';
import './styles.css';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();

  return (
    <div className="movie-details-container">
      <h1>Tela detalhes do filmes id: {movieId}</h1>
      <Evaluation />
      <div className="movie-details-card">
        <Comment movieId={movieId} />
      </div>
    </div>
  );
};

export default MovieDetails;
