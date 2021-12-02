import CommentDetails from 'components/CommentDetails';
import './styles.css';

const Comment = () => {
  return (
    <div className="base-card comment-card">
      <CommentDetails />
      <CommentDetails />
      <CommentDetails />
      <CommentDetails />
    </div>
  );
};

export default Comment;
