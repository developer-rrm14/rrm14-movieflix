import Button from 'components/Button';
import './styles.css';

const Evaluation = () => {
  return (
    <div className="base-card evaluation-card">
      <form>
        <div className="mb-4">
          <input
            type="text"
            className="form-control evaluation-input base-input"
            placeholder="Deixe a sua avaliação aqui"
            name="evaluation"
          />
        </div>
        <div className="evaluation-submit">
          <Button text="Salvar Avaliação" />
        </div>
      </form>
    </div>
  );
};

export default Evaluation;
