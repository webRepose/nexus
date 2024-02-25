import { NavLink } from "react-router-dom";
import Style from "../../styles/menu/aside/menu/Menu.module.css";

const Menu = ({ menu }) => {
  const menuItems = [
    {
      icons: "./img/aside/menu/desk.svg",
      title: "Рабочий стол",
      to: "/desk",
    },
    {
      icons: "./img/aside/menu/orders.svg",
      title: "Заказы",
      to: "/orders",
    },
    {
      icons: "./img/aside/menu/chats.svg",
      title: "Чаты",
      to: "/chats",
    },
    {
      icons: "./img/aside/menu/tasks.svg",
      title: "Задачи",
      to: "/tasks",
    },
    {
      icons: "./img/aside/menu/analize.svg",
      title: "Аналитика",
      to: "/analit",
    },
    {
      icons: "./img/aside/menu/items.svg",
      title: "Товары и услуги",
      to: "/items",
    },
    {
      icons: "./img/aside/menu/cagent.svg",
      title: "Контр агенты",
      to: "/agents",
    },
    {
      icons: "./img/aside/menu/paramsShop.svg",
      title: "Параметры магазина",
      to: "/params",
    },
    {
      icons: "./img/aside/menu/tg.svg",
      title: "Telegram-web",
      to: "/tg",
    },
    {
      icons: "./img/aside/menu/settings.svg",
      title: "Настройки",
      to: "/settings",
    },
  ];
  return (
    <section className={Style.menu}>
      <nav>
        {menuItems &&
          menuItems.map((e, id) => (
            <NavLink
              onClick={() => {
                if (document.querySelector("aside")) {
                  document
                    .querySelector("aside")
                    .classList.toggle("aside_unset");
                }
                document.querySelector("body").classList.toggle("flow");
              }}
              key={id}
              className={({ isActive }) => [isActive && Style.active]}
              to={e.to}
            >
              <div className={`${Style.menu_item} main_unset__img`}>
                <button title={e.title}>
                  <img
                    style={{
                      width: menu && "22px",
                      marginRight: menu && "0px",
                    }}
                    src={e.icons}
                    alt={"icons"}
                  />
                  {!menu && <p>{e.title}</p>}
                </button>
              </div>
            </NavLink>
          ))}
      </nav>
    </section>
  );
};

export default Menu;
