import { HashRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import { CartProvider, useCart } from './cart-context'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Product from './pages/Product'
import CartPage from './pages/CartPage'
import About from './pages/About'
import Contacts from './pages/Contacts'

function Header() {
  const { cart } = useCart()
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0)

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          <img src="logo.png" alt="GACHAPON" className="logo-img" />
        </Link>
        <nav className="nav">
          <NavLink to="/catalog">Каталог</NavLink>
          <NavLink to="/about">О нас</NavLink>
          <NavLink to="/contacts">Контакты</NavLink>
        </nav>
        <Link className="cart-button" to="/cart">
          🛒 Корзина
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>
      </div>
    </header>
  )
}

export default function App() {
  return (
    <CartProvider>
      <HashRouter>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
          <footer className="footer">
            <div className="container">
              © {new Date().getFullYear()} GACHAPON — гачапон-автоматы под заказ
            </div>
          </footer>
        </div>
      </HashRouter>
    </CartProvider>
  )
}
