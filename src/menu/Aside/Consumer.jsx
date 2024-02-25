import Style from "../../styles/menu/aside/consumer/Consumer.module.css";
const Consumer = ({ menu }) => {
  return (
    <button className={Style.consumer}>
      <div className={Style.consumer_content}>
        <img
          style={{
            marginRight: menu && "0px",
          }}
          src="./img/aside/menu/consumer.svg"
          alt="consumer"
        />
        {!menu && <p>Покупатель</p>}
      </div>
    </button>
  );
};

export default Consumer;
