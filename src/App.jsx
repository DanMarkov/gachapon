import { useState, useEffect } from 'react'
import { products, categories, formatPrice } from './data'
import Cart from './Cart'

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('gachapon-cart')
    return saved ? JSON.parse(saved) : []
  })
  const [cartOpen, setCartOpen] = useState(false)
  const [checkout, setCheckout] = useState(false)

  useEffect(() => {
    localStorage.setItem('gachapon-cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
    setCartOpen(true)
  }

  const visible =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory)

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0)

  return (
    <div className="app">
      <header className="header">
        <div className="container header-inner">
          <div className="logo">
            <img src="/logo.png" alt="GACHAPON" className="logo-img" />
          </div>
          <nav className="nav">
            <a href="#catalog">Каталог</a>
            <a href="#about">О нас</a>
            <a href="#contacts">Контакты</a>
          </nav>
          <button className="cart-button" onClick={() => setCartOpen(true)}>
            🛒 Корзина
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h2>Гачапон-автоматы для вашего города</h2>
          <p>
            Гачапон-автоматы с аниме-капсулами, иркутскими сувенирами и
            коллаборациями с местными магазинами.
          </p>
          <a className="hero-cta" href="#catalog">Смотреть каталог</a>
        </div>
      </section>

      <main className="container">
        <section id="catalog" className="catalog">
          <h2>Каталог</h2>
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
                <img src={p.image} alt={p.name} loading="lazy" />
                <h3>{p.name}</h3>
                <p className="card-desc">{p.description}</p>
                <div className="card-footer">
                  <span className="price">{formatPrice(p.price)}</span>
                  <button className="add" onClick={() => addToCart(p)}>
                    В корзину
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="about">
          <h2>О нас</h2>
          <p>
            Мы делаем и устанавливаем гачапон-автоматы с капсульными игрушками
            и сувенирами: аниме-серии для тематических мест, иркутские
            сувениры для туристов и эксклюзивные коллаборации с местными
            магазинами вроде «Твоей полки».
          </p>
        </section>

        <section id="contacts" className="contacts">
          <h2>Контакты</h2>
          <p>Иркутск · Доставка по России</p>
          <p>Telegram: @gachapon · Email: shop@gachapon.ru</p>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} GACHAPON — гачапон-автоматы под заказ
        </div>
      </footer>

      <Cart
        cart={cart}
        setCart={setCart}
        open={cartOpen}
        setOpen={setCartOpen}
        checkout={checkout}
        setCheckout={setCheckout}
      />
    </div>
  )
}
