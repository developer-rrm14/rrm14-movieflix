import './styles.css';

type Props = {
  text: string;
};

const ButtonBuy = ({ text }: Props) => {
  return (
    <>
      <div className="btn-buy-container">
        <button className="btn-buy bg-primary">
          <h6>{text}</h6>
        </button>
      </div>
    </>
  );
};

export default ButtonBuy;
