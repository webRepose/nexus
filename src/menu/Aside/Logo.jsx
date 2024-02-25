import { Link } from "react-router-dom";
import Style from "../../styles/menu/aside/logo/Logo.module.css";

const Logo = ({ setMenu, menu }) => {
  return (
    <section className={Style.logo}>
      <button
        style={{ transform: menu && "rotate(90deg)", margin: menu && "0 auto" }}
        title="Убрать меню"
        onClick={() => {
          if (window.innerWidth <= 900) return false;
          setMenu((prev) => !prev);
          if (document.querySelector("main")) {
            document.querySelector("main").classList.toggle("main_unset");
            document.querySelector("header").classList.toggle("main_unset");
          }
        }}
        className={Style.logo_btn}
      >
        <div></div>
        <div></div>
      </button>
      {!menu && (
        <Link to="/">
          <img src="../img/aside/logo.svg" alt="logo" />
        </Link>
      )}
    </section>
  );
};

export default Logo;
