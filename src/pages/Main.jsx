import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import { PizzaBlock, Skeleton } from "../components/PizzaBlock";
import { SearchContext } from "../App";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setFilters } from "../redux/slices/filterSlice";
import QueryString from "qs";
import { useNavigate } from "react-router-dom";
import { sortNames } from "../assets/variables";
import { categories } from "../assets/variables";
import InputSearch from "../components/InputSearch/InputSearch";

function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const { searchValue } = React.useContext(SearchContext);
  const { categoryId, sort } = useSelector((state) => state.filter);
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

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
    if (isSearch.current) {
      fetchPizzas();
      isSearch.current = false;
    }

    window.scrollTo(0, 0);
  }, [sort, categoryId, searchValue]);

  const filteredPizzas = pizzas.filter((pizza) =>
    pizza.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  function handleChangeCategoryId(id) {
    dispatch(setCategoryId(id));
  }

  const fetchPizzas = async () => {
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";

    // fetch(
    //   `https://65c35fe039055e7482c0b7bd.mockapi.io/pizzas?${category}&sortBy=${sortBy}&order=${order}`
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setPizzas(data);
    //     setIsLoading(false);
    //   });

    const res = await fetch(
      `https://65c35fe039055e7482c0b7bd.mockapi.io/pizzas?${category}&sortBy=${sortBy}&order=${order}`
    ).then((res) => res.json());

    setPizzas(res);
    setIsLoading(false);
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
        {isLoading
          ? [...new Array(6)].map((item, i) => <Skeleton key={i} />)
          : filteredPizzas.map((pizza, i) => <PizzaBlock {...pizza} key={i} />)}
      </div>
    </div>
  );
}

export default Main;
