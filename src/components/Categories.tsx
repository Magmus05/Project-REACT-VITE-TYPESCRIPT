import React from "react";
import { categories } from "../assets/variables";
import { setCategoryId } from "../redux/slices/filterSlice";
import { useAppDispatch } from "../redux/srore";

type ICategoriesProps = {
  categoryId: number;
}

const Categories: React.FC<ICategoriesProps> = ({ categoryId }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li
            key={i}
            onClick={() => dispatch(setCategoryId(i))}
            className={categoryId === i ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Categories;
