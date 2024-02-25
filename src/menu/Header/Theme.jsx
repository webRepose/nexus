import Style from "../../styles/menu/header/theme/Theme.module.css";

const Theme = () => {
  return (
    <label className={Style.ui_switch}>
      <input type="checkbox" />
      <div className={Style.slider}>
        <div className={Style.circle}></div>
      </div>
    </label>
  );
};

export default Theme;
