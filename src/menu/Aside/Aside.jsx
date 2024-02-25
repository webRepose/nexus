import { Outlet } from "react-router-dom";
import Style from "../../styles/menu/aside/Aside.module.css";
import Logo from "./Logo";
import Menu from "./Menu";
import Consumer from "./Consumer";
import { useState } from "react";

const Aside = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <aside style={{ width: menu && "auto" }} className={Style.aside}>
        <div className={Style.aside_logo}>
          <Logo setMenu={setMenu} menu={menu} />
        </div>
        <Menu menu={menu} />
        <Consumer menu={menu}/>
      </aside>
      <Outlet />
    </>
  );
};

export default Aside;
