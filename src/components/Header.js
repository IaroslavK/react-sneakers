function Header() {
  return (
    <header className="d-flex justify-between p-40">
      <div className="headerLeft d-flex align-center">
        <img src="/img/logo.png" alt="logo" width={40} height={40} />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30">
          <img src="/img/basket.svg" alt="basket" width={18} height={18} />
          <span>600 грн.</span>
        </li>
        <li>
          <img src="/img/union.svg" alt="union" width={18} height={18} />
        </li>
      </ul>
    </header>
  );
}

export default Header;
