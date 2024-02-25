import Style from "../../styles/main/orders/Orders.module.css";
import OrdersList from "./OrdersList";
import { getRelativeTime } from "../../components/GetRelativeTime";
const OrdersFilter = ({
  statuses,
  summs,
  orders,
  setFilterSells,
  filterSells,
  setFilterSellsData,
  filterSellsData,
  isAll,
  setOrders
}) => {
  return (
    <>
      <div className={Style.orders_tikets__orders__table}>
        <div style={{ position: "relative" }}>
          <button
            onClick={() => {
              setFilterSells({
                cagent: true,
                status: false,
                summ: false,
                id: false,
              });
            }}
            className={Style.orders_tikets__orders__table_item}
          >
            Контрагент
            <img src="./img/main/orders/sort_arrows.svg" alt="filtr" />
          </button>

          {filterSells.cagent && (
            <div
              className={Style.orders_tikets__orders__table_item_status_modal}
            >
              <ul>
                {orders.map((e, id) => (
                  <li
                    key={id + Math.random(1000)}
                    onClick={() => {
                      setFilterSells({
                        cagent: false,
                        status: false,
                        summ: false,
                        id: false,
                      });

                      setFilterSellsData(
                        (prev) =>
                          (prev = {
                            status: "",
                            cagent: e.cagent,
                            order: "",
                            summ: "",
                            id: filterSellsData.id,
                            idSort: "",
                          })
                      );
                    }}
                    style={{ color: "#eef0f4" }}
                  >
                    {e.cagent}
                  </li>
                ))}
                <li
                  onClick={() => {
                    setFilterSells({
                      cagent: false,
                      status: false,
                      summ: false,
                      id: false,
                    });

                    setFilterSellsData(
                      (prev) =>
                        (prev = {
                          status: "",
                          cagent: "",
                          order: "",
                          summ: "",
                          id: filterSellsData.id,
                          idSort: "",
                        })
                    );
                  }}
                  style={{ color: "#eef0f4" }}
                >
                  Все
                </li>
              </ul>
            </div>
          )}
        </div>
        <div style={{ position: "relative" }}>
          <button
            onClick={() => {
              setFilterSells({
                cagent: false,
                status: false,
                summ: false,
                id: true,
              });
            }}
            className={Style.orders_tikets__orders__table_item}
          >
            Заказ №
            <img src="./img/main/orders/sort_arrows.svg" alt="filtr" />
          </button>

          {filterSells.id && (
            <div
              className={Style.orders_tikets__orders__table_item_status_modal}
            >
              <ul>
                {summs.map((e, id) => (
                  <li
                    key={id + Math.random(1000)}
                    onClick={() => {
                      setFilterSells({
                        cagent: false,
                        status: false,
                        summ: false,
                        id: false,
                      });

                      setFilterSellsData(
                        (prev) =>
                          (prev = {
                            status: "",
                            cagent: "",
                            order: "",
                            summ: "",
                            id: filterSellsData.id,
                            idSort: e,
                          })
                      );
                    }}
                    style={{ color: "#eef0f4" }}
                  >
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div style={{ position: "relative" }}>
          <button
            onClick={() => {
              setFilterSells({
                cagent: false,
                status: false,
                summ: true,
                id: false,
              });
            }}
            className={Style.orders_tikets__orders__table_item}
          >
            Сумма
            <img src="./img/main/orders/sort_arrows.svg" alt="filtr" />
          </button>

          {filterSells.summ && (
            <div
              className={Style.orders_tikets__orders__table_item_status_modal}
            >
              <ul>
                {summs.map((e, id) => (
                  <li
                    key={id + Math.random(1000)}
                    onClick={() => {
                      setFilterSells({
                        cagent: false,
                        status: false,
                        summ: false,
                        id: false,
                      });

                      setFilterSellsData(
                        (prev) =>
                          (prev = {
                            status: "",
                            cagent: "",
                            order: "",
                            summ: e,
                            id: filterSellsData.id,
                            idSort: "",
                          })
                      );
                    }}
                    style={{ color: "#eef0f4" }}
                  >
                    {e}
                  </li>
                ))}
                <li
                  onClick={() => {
                    setFilterSells({
                      cagent: false,
                      status: false,
                      summ: false,
                      id: false,
                    });

                    setFilterSellsData(
                      (prev) =>
                        (prev = {
                          status: "",
                          cagent: "",
                          order: "",
                          summ: "",
                          id: filterSellsData.id,
                          idSort: "",
                        })
                    );
                  }}
                  style={{ color: "#eef0f4" }}
                >
                  Все
                </li>
              </ul>
            </div>
          )}
        </div>
        <div style={{ position: "relative" }}>
          <button
            onClick={() => {
              if (!isAll) return false;
              setFilterSells({
                cagent: false,
                status: true,
                summ: false,
                id: false,
              });
            }}
            className={Style.orders_tikets__orders__table_item}
          >
            Статус
            <img src="./img/main/orders/sort_arrows.svg" alt="filtr" />
          </button>

          {filterSells.status && (
            <div
              className={Style.orders_tikets__orders__table_item_status_modal}
            >
              <ul>
                {statuses.map((e, id) => (
                  <li
                    key={id + Math.random(1000)}
                    onClick={() => {
                      setFilterSells({
                        cagent: false,
                        status: false,
                        summ: false,
                        id: false,
                      });

                      setFilterSellsData(
                        (prev) =>
                          (prev = {
                            status: e,
                            cagent: "",
                            order: "",
                            summ: "",
                            id: filterSellsData.id,
                            idSort: "",
                          })
                      );
                    }}
                    style={{ color: "#eef0f4" }}
                  >
                    {e}
                  </li>
                ))}
                <li
                  onClick={() => {
                    setFilterSells({
                      cagent: false,
                      status: false,
                      summ: false,
                      id: false,
                    });

                    setFilterSellsData(
                      (prev) =>
                        (prev = {
                          status: "",
                          cagent: "",
                          order: "",
                          summ: "",
                          id: filterSellsData.id,
                          idSort: "",
                        })
                    );
                  }}
                  style={{ color: "#eef0f4" }}
                >
                  Все
                </li>
              </ul>
            </div>
          )}
        </div>
        {isAll && (
          <button className={Style.orders_tikets__orders__table_set}>
            <div></div>
            <div></div>
            <div></div>
          </button>
        )}
      </div>

      {filterSellsData.status
        ? orders.map(
            (data, id) =>
              data.status === filterSellsData.status && (
                <OrdersList
                  nativeId={id}
                  key={data.id + Math.random(1000)}
                  data={data}
                  id={id}
                  orders={orders}
                  statusModal={filterSellsData}
                  setStatusModal={setFilterSellsData}
                  getRelativeTime={getRelativeTime}
                  isAll={isAll}
                  setOrders={setOrders}
                />
              )
          )
        : filterSellsData.cagent
        ? orders.map(
            (data, id) =>
              data.cagent === filterSellsData.cagent && (
                <OrdersList
                  nativeId={id}
                  key={data.id + Math.random(1000)}
                  data={data}
                  id={id}
                  orders={orders}
                  statusModal={filterSellsData}
                  setStatusModal={setFilterSellsData}
                  getRelativeTime={getRelativeTime}
                  isAll={isAll}
                  setOrders={setOrders}
                />
              )
          )
        : filterSellsData.summ && filterSellsData.summ === "Наименьшее"
        ? orders
            .sort((a, b) => parseFloat(a.summ) - parseFloat(b.summ))
            .map((data, id) => (
              <OrdersList
                nativeId={id}
                key={data.id + Math.random(1000)}
                data={data}
                id={id}
                orders={orders}
                statusModal={filterSellsData}
                setStatusModal={setFilterSellsData}
                getRelativeTime={getRelativeTime}
                isAll={isAll}
                setOrders={setOrders}
              />
            ))
        : filterSellsData.summ === "Наибольшее"
        ? orders
            .sort((a, b) => parseFloat(b.summ) - parseFloat(a.summ))
            .map((data, id) => (
              <OrdersList
                nativeId={id}
                key={data.id + Math.random(1000)}
                data={data}
                id={id}
                orders={orders}
                statusModal={filterSellsData}
                setStatusModal={setFilterSellsData}
                getRelativeTime={getRelativeTime}
                isAll={isAll}
                setOrders={setOrders}
              />
            ))
        : filterSellsData.idSort && filterSellsData.idSort === "Наименьшее"
        ? orders
            .sort((a, b) => parseFloat(a.id) - parseFloat(b.id))
            .map((data, id) => (
              <OrdersList
                nativeId={id}
                key={data.id + Math.random(1000)}
                data={data}
                id={id}
                orders={orders}
                statusModal={filterSellsData}
                setStatusModal={setFilterSellsData}
                getRelativeTime={getRelativeTime}
                isAll={isAll}
                setOrders={setOrders}
              />
            ))
        : filterSellsData.idSort === "Наибольшее"
        ? orders
            .sort((a, b) => parseFloat(b.id) - parseFloat(a.id))
            .map((data, id) => (
              <OrdersList
                nativeId={id}
                key={data.id + Math.random(1000)}
                data={data}
                id={id}
                orders={orders}
                statusModal={filterSellsData}
                setStatusModal={setFilterSellsData}
                getRelativeTime={getRelativeTime}
                isAll={isAll}
                setOrders={setOrders}
              />
            ))
        : orders.map((data, id) => (
            <OrdersList
              nativeId={id}
              key={data.id + Math.random(1000)}
              data={data}
              id={id}
              orders={orders}
              statusModal={filterSellsData}
              setStatusModal={setFilterSellsData}
              getRelativeTime={getRelativeTime}
              isAll={isAll}
              setOrders={setOrders}
            />
          ))}
    </>
  );
};

export default OrdersFilter;
