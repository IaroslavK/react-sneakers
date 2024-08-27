function Card({ img, price, description }) {
  const image = `/img/sneakers/${img}`;
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img src={image} alt={img} width={133} height={112} />
      <h5>{description}</h5>
      <div className=" d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена: </span>
          <b>{price} грн.</b>
        </div>
        <button className="button">
          <img src="/img/plus.svg" alt="plus" width={11} height={11} />
        </button>
      </div>
    </div>
  );
}

export default Card;
