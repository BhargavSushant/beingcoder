// components/SubcategoryItem.js

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

function SubcategoryItem({ subcategory, posts, category }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const subcategoryName =
    subcategory === "_uncategorized" ? "Uncategorized" : subcategory;

  return (
    <li className="mb-2">
      <button
        className="w-full text-left hover:bg-gray-200 p-2 rounded flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mr-2">{isOpen ? "▼" : "▶"}</span>
        {subcategoryName}
      </button>
      {isOpen && (
        <ul className="ml-4 mt-2">
          {posts.map(({ id, title }) => {
            const href = `/posts/${id}`;
            return (
              <li key={id} className="mb-1 flex items-center">
                <span className="mr-2">•</span>
                <Link
                  href={href}
                  className={`hover:underline ${
                    router.pathname === href ? "font-bold underline" : ""
                  }`}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}

SubcategoryItem.propTypes = {
  subcategory: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
};

export default SubcategoryItem;
