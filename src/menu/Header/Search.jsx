import Style from "../../styles/menu/header/search/Search.module.css";
const Search = () => {
  return (
    <div className={Style.search}>
      <div className={Style.search_icons}>
        <img src="../img/header/search.svg" alt="search" />
      </div>
      <input type="search" name="search" id="search" placeholder="Поиск" />
    </div>
  );
};

export default Search;
