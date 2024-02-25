import Style from "../../styles/menu/header/account/Account.module.css";
const Account = () => {
  return (
    <button className={Style.acc}>
      <img src="./img/header/user.svg" alt="account" />
    </button>
  );
};

export default Account;
