import React from 'react'

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="container mb-5">
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              className="btn btn-outline-warning border-2 fw-bold text-capitalize px-4 py-2 transition"
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Categories
