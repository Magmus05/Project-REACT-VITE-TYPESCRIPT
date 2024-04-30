import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import { PizzaBlock, Skeleton } from "../components/PizzaBlock";

import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setFilters } from "../redux/slices/filterSlice";
import QueryString from "qs";
import { useNavigate } from "react-router-dom";
import { sortNames } from "../assets/variables";
import { categories } from "../assets/variables";
import InputSearch from "../components/InputSearch/InputSearch";
import { fetchPizzas } from "../redux/slices/pizzaSlice";

function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { categoryId, sort } = useSelector((state) => state.filter);
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const { items, status, searchValue } = useSelector(
    (state) => state.pizzaSlice
  );

  // Если изменили параметры и был первый рендер
  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = QueryString.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
      });

      navigate(`?${queryString}`);
    }
    isSearch.current = true;
    isMounted.current = true;
  }, [sort, categoryId]);

  // Если был первый рендер , то проверяем URL-параметры и сохраняем в редаксе
  React.useEffect(() => {
    if (window.location.search) {
      const params = QueryString.parse(window.location.search.substring(1));
      const sort = sortNames.find(
        (obj) => obj.sortProperty === params.sortProperty
      );

      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
      isSearch.current = true;
    }
  }, []);

  // Если был первый рендер, то запрашиваем пиццы
  React.useEffect(() => {
    getPizzas();

    window.scrollTo(0, 0);
  }, [sort, categoryId, searchValue]);

  function handleChangeCategoryId(id) {
    dispatch(setCategoryId(id));
  }

  const getPizzas = () => {
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";

    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        searchValue,
      })
    );
  };
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          categoryId={categoryId}
          setCategoryId={handleChangeCategoryId}
        />
        <Sort />
      </div>
      <div className="content__search-and-title">
        <h1 className="content__title">{categories[categoryId]}</h1>{" "}
        <InputSearch />{" "}
      </div>

      <div className="content__items">
        {status === "loading"
          ? [...new Array(6)].map((item, i) => <Skeleton key={i} />)
          : items.map((pizza, i) => <PizzaBlock {...pizza} key={i} />)}
      </div>
    </div>
  );
}

export default Main;