import React from "react";
import { categories } from "../assets/variables";
import {ICategoriesProps} from "../types/Types"

const Categories: React.FC<ICategoriesProps> = ({categoryId, setCategoryId}) => {

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li
            key={i}
            onClick={() => setCategoryId(i)}
            className={categoryId === i ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories