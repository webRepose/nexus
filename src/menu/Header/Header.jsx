import Style from "../../styles/menu/header/Header.module.css";
import Logo from "../Aside/Logo";
import Account from "./Account";
import Search from "./Search";
import Theme from "./Theme";

const Header = () => {
  return (
    <header className={Style.header}>
      <div className={Style.header_search}>
        <Search />
      </div>
      <button
        onClick={() => {
          if (document.querySelector("aside")) {
            document.querySelector("aside").classList.toggle("aside_unset");
            document.querySelector("body").classList.toggle("flow");
          }
        }}
        className={Style.header_burger}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
      <div className={Style.header_theme_mobile}>
        <Theme />
        <Logo />
      </div>
      <div className={Style.header_settings}>
        <button className={Style.header_settings_notify}>
          <img src="../img/header/notifications.svg" alt="notify" />
        </button>
        <div className={`${Style.header_theme_pc} ${Style.header_theme}`}>
          <Theme />
        </div>
        <Account />
      </div>
    </header>
  );
};

export default Header;
