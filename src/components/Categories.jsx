import React from "react";
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div>
      <div role="tablist" className="tabs tabs-boxed">
        {categories.map((category) => (
          <NavLink
            to={`category/${category.category}`}
            role="tab"
            key={category.id}
            className={({ isActive }) =>
              `tab flex-1 text-lg font-semibold ${
                isActive ? "tab-active bg-warning text-white" : "text-gray-600"
              }`
            }
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
