import { categories } from "../assets/variables";

// import React from "react";
export default function Categories({categoryId, setCategoryId}) {

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
