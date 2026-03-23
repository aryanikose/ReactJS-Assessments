import React, { useState } from 'react'
import Menu from './components/Menu'
import Categories from './components/Categories'
import Navbar from './components/Navbar'
import items from './data/MenuData'

const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <main>
      <Navbar />
      <section className="menu section py-5">
        <div className="title text-center mb-5">
          <h2 className="display-4 fw-bold">Our Menu</h2>
          <div className="underline mx-auto"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
