import './styles.css';

const Movie = () => {
  return (
    <div className="movie-container">
      <h1>Tela listagem de filmes</h1>
      <div className="movie-list">
        <ul>
          <li>Acessar /movies/1</li>
          <li>Acessar /movies/2</li>
        </ul>
      </div>
    </div>
  );
};

export default Movie;
