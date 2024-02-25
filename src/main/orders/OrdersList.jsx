import { useRef, useState, useEffect } from "react";
import Style from "../../styles/main/orders/Orders.module.css";

const OrdersList = ({
  id,
  data,
  orders,
  statusModal,
  setStatusModal,
  getRelativeTime,
  nativeId,
  isAll,
  setOrders,
}) => {
  const [modal, setModal] = useState(statusModal.modal);
  const refButton = useRef(null);
  const refModal = useRef(null);
  const dataModal = [
    {
      title: "Создать задачу",
      icon: "../img/main/orders/modalTask.svg",
    },
    {
      title: "Создать счет на оплату",
      icon: "../img/main/orders/modalPrice.svg",
    },
    {
      title: "Создать накладную",
      icon: "../img/main/orders/modalDock.svg",
    },
    {
      title: "Отправить заказ",
      icon: "../img/main/orders/modalOrder.svg",
    },
    {
      title: "Распечатать",
      icon: "../img/main/orders/modalPrint.svg",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        refModal.current &&
        !refModal.current.contains(event.target) &&
        refButton &&
        !refButton.current.contains(event.target)
      ) {
        setModal((prev) => (prev = false));
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [refButton, modal, setModal]);

  return (
    <div className={Style.orders_tikets__orders__table}>
      <div className={Style.orders_tikets__orders__table_item_o}>
        <img src="./img/main/orders/user_order.svg" alt="ava" />
        <div>
          <p>{data.cagent}</p>
          <p style={{ display: "flex" }}>
            <i className={Style.orders_tikets__orders__table_id_block}>
              №{id + 1},
            </i>
            {getRelativeTime(Number(data.date))}
          </p>
        </div>
      </div>
      <div
        className={`${Style.orders_tikets__orders__table_item_o} ${Style.orders_tikets__orders__table_id_hidden}`}
      >
        №{id + 1}
      </div>
      <div
        className={`${Style.orders_tikets__orders__table_item_o} ${Style.orders_tikets__orders__table_summ_hidden}`}
      >
        {data.summ} Т
      </div>
      <div style={{ position: "relative" }}>
        <p className={Style.orders_tikets__orders__table_summ_m}>
          {data.summ} Т
        </p>
        <button
          onClick={() => {
            if (!isAll) return false;
            setStatusModal((prev) => (prev = { res: !prev.res, id: nativeId }));
          }}
          className={`${Style.orders_tikets__orders__table_item_o} ${Style.orders_tikets__orders__table_summ_btn}`}
        >
          <div
            style={{
              backgroundColor:
                data.status === "Успешно"
                  ? "#2BEFB3"
                  : data.status === "Отменен" && "#FF316A",
            }}
            className={Style.orders_tikets__orders__table_item_status}
          ></div>
          <p
            style={{
              color:
                data.status === "Успешно"
                  ? "#2BEFB3"
                  : data.status === "Отменен" && "#FF316A",
            }}
          >
            {data.status}
          </p>
          {isAll && (
            <img src="./img/main/orders/status.svg" alt="change status" />
          )}
          {statusModal.res && statusModal.id === nativeId && (
            <div
              className={Style.orders_tikets__orders__table_item_status_modal}
            >
              <ul>
                <li
                  onClick={() => {
                    orders[nativeId].status = "Успешно";
                  }}
                >
                  Успешно
                </li>
                <li
                  onClick={() => {
                    orders[nativeId].status = "Отменен";
                  }}
                >
                  Отменить
                </li>
                <li
                  onClick={() => {
                    orders[nativeId].status = "Новый";
                  }}
                >
                  Новый
                </li>
              </ul>
            </div>
          )}
        </button>
      </div>
      <div style={{ position: "relative" }}>
        {isAll && (
          <button
            ref={refButton}
            onClick={() => {
              setModal((prev) => !prev);
            }}
            className={Style.orders_tikets__orders__table_set}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>
        )}

        {modal && (
          <div
            ref={refModal}
            className={Style.orders_tikets__orders__table_item_menu_modal}
          >
            <ul>
              {dataModal &&
                dataModal.map((data, id) => (
                  <li
                  key={id}
                    onClick={() => {
                      setModal((prev) => !prev);
                    }}
                  >
                    <img src={data.icon} alt="icon" />
                    {data.title}
                  </li>
                ))}
              <hr />
              <li
                onClick={() => {
                  orders.splice(id, 1);
                  setOrders((prev) => (prev = [...orders]));
                  setModal((prev) => !prev);
                }}
              >
                <img
                  src="../img/main/orders/modalDelite.svg"
                  alt="send order"
                />
                Удалить заказ
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersList;
