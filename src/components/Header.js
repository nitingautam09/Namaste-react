import { LOGO_URL } from "../util/constant";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="menue-items">
        <ul>
          <li>Offer</li>
          <li>Home</li>
          <li>food</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
