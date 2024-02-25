import { useEffect, useState } from "react";
import Style from "../../styles/main/orders/Orders.module.css";
import Search from "../../menu/Header/Search";
import Chart from "./Chart";
import OrdersFilter from "./OrdersFilter";

const Orders = () => {
  const [tikets, setTikets] = useState(true);
  const [charts, setCharts] = useState({
    first: true,
    second: false,
    third: false,
  });
  const [countOrder, setCountOrder] = useState({
    count: 0,
    summ: 0,
  });
  const [orders, setOrders] = useState([]);

  const [filterSellsData, setFilterSellsData] = useState({
    status: "",
    cagent: "",
    order: "",
    summ: "",
    id: 0,
    modal: false,
  });

  const [filterSells, setFilterSells] = useState({
    cagent: false,
    status: false,
    summ: false,
    id: false,
  });

  const [filterAllData, setFilterAllData] = useState({
    status: "",
    cagent: "",
    order: "",
    summ: "",
    id: 0,
    modal: false,
  });

  const [filterAll, setFilterAll] = useState({
    cagent: false,
    status: false,
    summ: false,
    id: false,
  });

  const statuses = ["Новый", "Отменен", "Успешно"];
  const summs = ["Наибольшее", "Наименьшее"];
  const [periods, setPeriods] = useState({
    first: true,
    second: false,
    third: false,
    days: 1,
  });

  useEffect(() => {
    let summ = 0;
    let idCount = 0;
    orders.forEach((e, id) => {
      summ = summ + Number(e.summ);
      idCount = id + 1;
      setCountOrder({ count: idCount, summ: summ });
    });
  }, [orders]);

  const createOrder = () => {
    let cagent = prompt("Введите контрагента");
    let summ = prompt("Введите сумму");

    if (!cagent || !summ) {
      return false;
    }

    if (cagent && cagent.length < 5) {
      cagent = prompt("Введите контрагента корректно");
      if (cagent.length < 5) {
        alert("Некоректно");
        return false;
      }
    }
    if ((summ && isNaN(Number(summ))) || summ.length < 3) {
      summ = prompt("Введите сумму корректно");
      if (isNaN(Number(summ))) {
        alert("Некоректно");
        return false;
      }
    }

    if ((cagent.length || summ.length) < 3) {
      return false;
    }

    setOrders([
      ...orders,
      {
        cagent: cagent,
        summ: summ,
        status: "Новый",
        date: new Date(),
        id: (filterAllData.id += 1),
        idSort: "",
      },
    ]);
  };

  return (
    <main>
      <section className={Style.orders}>
        <div className={Style.orders_tikets}>
          <div className={`${Style.orders_tikets__filter} ${Style.filter_pc}`}>
            <button className={Style.orders_tikets__sort}>
              <div></div>
              <div></div>
              <div></div>
            </button>

            <button className={Style.orders_tikets__sort2}>
              <div></div>
              <div></div>
              <div></div>
            </button>

            <nav className={Style.orders_tikets__tikorder}>
              <ul>
                <li>
                  <button
                    onClick={() => {
                      setTikets((prev) => (prev = false));
                    }}
                  >
                    <p
                      className={
                        !tikets ? Style.orders_tikets__tikorder_active_text : ""
                      }
                    >
                      Заявки
                    </p>
                    {!tikets && (
                      <hr className={Style.orders_tikets__tikorder_active} />
                    )}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setTikets((prev) => (prev = true));
                    }}
                  >
                    <p
                      className={
                        tikets ? Style.orders_tikets__tikorder_active_text : ""
                      }
                    >
                      Заказы
                    </p>
                    {tikets && (
                      <hr className={Style.orders_tikets__tikorder_active} />
                    )}
                  </button>
                </li>
              </ul>
            </nav>

            <div className={Style.orders_tikets__count}>
              <p>{countOrder.count} заказов,</p>
              <p>{countOrder.summ} Т</p>
            </div>

            <button className={Style.orders_tikets__sort3}>
              <img src="./img/main/orders/filter_list.svg" alt="filter" />
            </button>

            <button
              onClick={createOrder}
              className={Style.orders_tikets__create}
            >
              <img src="./img/main/orders/create.svg" alt="create" />
              <p>Создать заказ</p>
            </button>
          </div>
          <div
            className={`${Style.orders_tikets__filter} ${Style.filter_modile}`}
          >
            <div className={Style.orders_tikets__mobile_one}>
              <button className={Style.orders_tikets__sort3}>
                <img src="./img/main/orders/filter_list.svg" alt="filter" />
              </button>

              <Search />

              <nav className={Style.orders_tikets__tikorder}>
                <ul>
                  <li>
                    <button
                      onClick={() => {
                        setTikets((prev) => (prev = false));
                      }}
                    >
                      <p
                        className={
                          !tikets
                            ? Style.orders_tikets__tikorder_active_text
                            : ""
                        }
                      >
                        Активные
                      </p>
                      {!tikets && (
                        <hr className={Style.orders_tikets__tikorder_active} />
                      )}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setTikets((prev) => (prev = true));
                      }}
                    >
                      <p
                        className={
                          tikets
                            ? Style.orders_tikets__tikorder_active_text
                            : ""
                        }
                      >
                        Завершенные
                      </p>
                      {tikets && (
                        <hr className={Style.orders_tikets__tikorder_active} />
                      )}
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={Style.orders_tikets__mobile_two}>
              <button className={Style.orders_tikets__mobile_two_date}>
                <p>26 октября 2023 года</p>
                <img src="../img/main/orders/calendar.svg" alt="calendar" />
              </button>
              <div className={Style.orders_tikets__count}>
                <p>{countOrder.count} заказов,</p>
                <p>{countOrder.summ} Т</p>
              </div>

              <button
                onClick={createOrder}
                className={Style.orders_tikets__create}
              >
                <img src="./img/main/orders/create.svg" alt="create" />
              </button>
            </div>
          </div>

          <div className={Style.orders_tikets__orders}>
            <OrdersFilter
              filterSells={filterAll}
              setFilterSells={setFilterAll}
              filterSellsData={filterAllData}
              setFilterSellsData={setFilterAllData}
              orders={orders}
              summs={summs}
              statuses={statuses}
              isAll={true}
              setOrders={setOrders}
            />
          </div>
        </div>

        <div className={Style.orders_charter}>
          <div className={Style.orders_charter_filter}>
            <h2>Обзор продаж</h2>
            <nav
              style={{ marginLeft: "auto" }}
              className={Style.orders_tikets__tikorder}
            >
              <ul>
                <li>
                  <button
                    onClick={() => {
                      setCharts(
                        (prev) =>
                          (prev = {
                            first: true,
                            second: false,
                            third: false,
                          })
                      );
                    }}
                  >
                    <p
                      className={
                        charts.first
                          ? Style.orders_tikets__tikorder_active_text
                          : ""
                      }
                    >
                      Общая выручка
                    </p>
                    {charts.first && (
                      <hr className={Style.orders_tikets__tikorder_active} />
                    )}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setCharts(
                        (prev) =>
                          (prev = {
                            first: false,
                            second: true,
                            third: false,
                          })
                      );
                    }}
                  >
                    <p
                      className={
                        charts.second
                          ? Style.orders_tikets__tikorder_active_text
                          : ""
                      }
                    >
                      Средний чек
                    </p>
                    {charts.second && (
                      <hr className={Style.orders_tikets__tikorder_active} />
                    )}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setCharts(
                        (prev) =>
                          (prev = {
                            first: false,
                            second: false,
                            third: true,
                          })
                      );
                    }}
                  >
                    <p
                      className={
                        charts.third
                          ? Style.orders_tikets__tikorder_active_text
                          : ""
                      }
                    >
                      Кол-во заказов
                    </p>
                    {charts.third && (
                      <hr className={Style.orders_tikets__tikorder_active} />
                    )}
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <div className={Style.orders_charter_chart}>
            <div className={Style.orders_charter_padding}>
              <div className={Style.orders_charter_filter}>
                <h3>Выбор периода</h3>
                <nav
                  style={{ marginLeft: "auto" }}
                  className={Style.orders_tikets__tikorder}
                >
                  <ul>
                    <img src="../img/main/orders/calendar.svg" alt="calendar" />
                    <li>
                      <button
                        onClick={() => {
                          setPeriods(
                            (prev) =>
                              (prev = {
                                first: true,
                                second: false,
                                third: false,
                                days: 1,
                              })
                          );
                        }}
                      >
                        <p
                          className={
                            periods.first
                              ? Style.orders_tikets__tikorder_active_text
                              : ""
                          }
                        >
                          Сегодня
                        </p>
                        {periods.first && (
                          <hr
                            className={Style.orders_tikets__tikorder_active}
                          />
                        )}
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          setPeriods(
                            (prev) =>
                              (prev = {
                                first: false,
                                second: true,
                                third: false,
                                days: 6,
                              })
                          );
                        }}
                      >
                        <p
                          className={
                            periods.second
                              ? Style.orders_tikets__tikorder_active_text
                              : ""
                          }
                        >
                          Неделя
                        </p>
                        {periods.second && (
                          <hr
                            className={Style.orders_tikets__tikorder_active}
                          />
                        )}
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          setPeriods(
                            (prev) =>
                              (prev = {
                                first: false,
                                second: false,
                                third: true,
                                days: 30,
                              })
                          );
                        }}
                      >
                        <p
                          className={
                            periods.third
                              ? Style.orders_tikets__tikorder_active_text
                              : ""
                          }
                        >
                          Месяц
                        </p>
                        {periods.third && (
                          <hr
                            className={Style.orders_tikets__tikorder_active}
                          />
                        )}
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
              <Chart value={orders && orders} time={periods.days} />
            </div>

            <div className={Style.orders_charter_sells}>
              <h2 className={Style.orders_charter_sells_name}>
                Завершенные продажи
              </h2>

              <div
                style={{ marginBottom: "20px", minHeight: "auto" }}
                className={Style.orders_tikets__orders}
              >
                <OrdersFilter
                  filterSells={filterSells}
                  setFilterSells={setFilterSells}
                  filterSellsData={filterSellsData}
                  setFilterSellsData={setFilterSellsData}
                  orders={orders.filter((x) => x.status === "Успешно")}
                  summs={summs}
                  statuses={statuses}
                  isAll={false}
                  setOrders={setOrders}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Orders;
