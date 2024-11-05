// components/CategoryItem.js

import React, { useState } from "react";
import SubcategoryItem from "../components/SubcateogryItem";
import PropTypes from "prop-types";

function CategoryItem({ category, subcategories }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="mb-2">
      <button
        className="w-full text-left font-semibold hover:bg-gray-200 p-2 rounded flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mr-2">{isOpen ? "▼" : "▶"}</span>
        {category}
      </button>
      {isOpen && (
        <ul className="ml-4 mt-2">
          {Object.keys(subcategories).map((subcategory) => (
            <SubcategoryItem
              key={subcategory}
              subcategory={subcategory}
              posts={subcategories[subcategory]}
              category={category}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

CategoryItem.propTypes = {
  category: PropTypes.string.isRequired,
  subcategories: PropTypes.object.isRequired,
};

export default CategoryItem;
