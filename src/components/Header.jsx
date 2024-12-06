import basketImg from "../images/basket.png";

const Header = () => {
  return (
    <header>
      <img className="logo" src={basketImg} alt="Shopping basket" />
      <h1>Shopping List App v1.0.0</h1>
    </header>
  );
};

export default Header;
