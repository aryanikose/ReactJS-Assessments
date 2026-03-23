import React from 'react'

const Menu = ({ items }) => {
  return (
    <div className="container">
      <div className="row g-4 justify-content-center">
        {items.map((menuItem) => {
          const { id, title, img, desc, price } = menuItem
          return (
            <article key={id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm overflow-hidden menu-item">
                <div className="position-relative overflow-hidden" style={{ height: '250px' }}>
                  <img 
                    src={img} 
                    alt={title} 
                    className="card-img-top w-100 h-100 object-fit-cover transition"
                  />
                  <span className="position-absolute top-0 end-0 bg-warning text-dark fw-bold px-3 py-1 m-3 rounded-pill">
                    ₹{price}
                  </span>
                </div>
                <div className="card-body p-4">
                  <header className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
                    <h5 className="card-title fw-bold text-capitalize mb-0">{title}</h5>
                  </header>
                  <p className="card-text text-muted mb-0 lh-lg">
                    {desc}
                  </p>
                </div>
                <div className="card-footer bg-white border-0 p-4 pt-0">
                  <button className="btn btn-warning w-100 fw-bold">Order Now</button>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Menu
