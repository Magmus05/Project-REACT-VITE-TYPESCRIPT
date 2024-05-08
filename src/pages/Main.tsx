import React from "react";
import { useSelector } from "react-redux";
import { setFilters } from "../redux/slices/filterSlice";
import QueryString from "qs";
import { useNavigate } from "react-router-dom";
import { sortNames } from "../assets/variables";
import { categories } from "../assets/variables";
import { fetchPizzas } from "../redux/slices/pizzaSlice";
import type { RootState } from "../redux/srore";
import { useAppDispatch } from "../redux/srore";
import {
  Categories,
  Sort,
  InputSearch,
  PizzaBlock,
  Skeleton,
} from "../components";

function Main() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { categoryId, sort } = useSelector((state: RootState) => state.filter);
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const { items, status, searchValue } = useSelector(
    (state: RootState) => state.pizzaSlice
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

      if (sort) {
        dispatch(
          setFilters({
            categoryId: Number(params.categoryId),
            sort: sort,
          })
        );
      }

      isSearch.current = true;
    }
  }, []);

  // Если был первый рендер, то запрашиваем пиццы
  React.useEffect(() => {
    getPizzas();

    window.scrollTo(0, 0);
  }, [sort, categoryId, searchValue]);

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
        <Categories categoryId={categoryId} />
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
