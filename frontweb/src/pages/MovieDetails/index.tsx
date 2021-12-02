import Evaluation from 'components/Evaluation';
import Comment from 'components/Comment';
import './styles.css';

const MovieDetails = () => {
  return (
    <div className="movie-details-container">
      <h1>Tela detalhes do filmes id: 1</h1>
      <Evaluation />
      <div className="movie-details-card">
        <Comment />
      </div>
    </div>
  );
};

export default MovieDetails;
