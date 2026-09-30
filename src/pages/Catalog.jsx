import { useState } from 'react'
import { Link } from 'react-router-dom'
import { products, categories, formatPrice } from '../data'
import { useCart } from '../cart-context'

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState('all')
  const { addToCart } = useCart()

  const visible =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <main className="container">
      <section className="catalog page-top">
        <h1>Каталог</h1>
        <div className="filters">
          {categories.map((c) => (
            <button
              key={c.id}
              className={activeCategory === c.id ? 'filter active' : 'filter'}
              onClick={() => setActiveCategory(c.id)}
            >
              {c.name}
            </button>
          ))}
        </div>
        <div className="grid">
          {visible.map((p) => (
            <article key={p.id} className="card">
              {p.badge && <span className="badge">{p.badge}</span>}
              <Link to={`/product/${p.id}`}>
                <img src={p.image} alt={p.name} loading="lazy" />
              </Link>
              <h3><Link className="card-link" to={`/product/${p.id}`}>{p.name}</Link></h3>
              <p className="card-desc">{p.description}</p>
              <div className="card-footer">
                <span className="price">{formatPrice(p.price)}</span>
                <button className="add" onClick={() => addToCart(p)}>В корзину</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
