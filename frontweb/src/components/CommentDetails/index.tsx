import { ReactComponent as StarImage } from 'assets/images/star.svg';
import './styles.css';

const CommentDetails = () => {
  return (
    <div className="comment-details-container">
      <div className="comment-details-header">
        <StarImage />
        <h1>Maria Silva</h1>
      </div>
      <div className="comment-details-card">
        <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
      </div>
    </div>
  );
};

export default CommentDetails;
