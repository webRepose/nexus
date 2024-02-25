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
}) => {
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
      <button className={Style.orders_tikets__orders__table_set}>
        <div></div>
        <div></div>
        <div></div>
      </button>
    </div>
  );
};

export default OrdersList;
