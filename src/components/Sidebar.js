function Sidebar() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="sidebar">
        <h2 className=" d-flex justify-between mb-30">
          Корзина{" "}
          <img
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="Remove"
          />
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <img
              className="cartItemImg mr-20"
              src="/img/sneakers/s1.jpg"
              alt="sneakers1"
              width={70}
              height={70}
            />
            {/* <div
              style={{ backgroundImage: "url(/img/sneakers/image1.jpg)" }}
              className="cartItemImg"
            ></div> */}
            <div className=" cartItemDescription mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>10000 грн.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <img
              className="cartItemImg mr-20"
              src="/img/sneakers/s2.jpg"
              alt="sneakers1"
              width={70}
              height={70}
            />
            <div className=" cartItemDescription mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>10000 грн.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого: </span>
              <div></div>
              <b>21000 грн.</b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div></div>
              <b>1000 грн.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ{" "}
            <img src="/img/arrow.svg" alt="Arrow" width={14} height={12} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
