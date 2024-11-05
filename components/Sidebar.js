// components/Sidebar.js

import React from "react";
import CategoryItem from "../components/CategoryItem";
import PropTypes from "prop-types";

export default function Sidebar({ categories }) {
  return (
    <aside className="w-64 bg-gray-100 border-r border-gray-200">
      <nav className="p-4">
        <ul>
          {Object.keys(categories).map((category) => (
            <CategoryItem
              key={category}
              category={category}
              subcategories={categories[category]}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}

Sidebar.propTypes = {
  categories: PropTypes.object.isRequired,
};
