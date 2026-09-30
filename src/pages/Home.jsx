import { Link } from 'react-router-dom'
import { products, formatPrice } from '../data'

export default function Home() {
  const featured = products.slice(0, 3)
  return (
    <>
      <section className="hero">
        <div className="container">
          <h2>Гачапон-автоматы для вашего города</h2>
          <p>
            Аниме фендомы, иркутские сувениры и коллаборации с местными
            магазинами — в капсулах.
          </p>
          <Link className="hero-cta" to="/catalog">Смотреть каталог</Link>
        </div>
      </section>

      <main className="container">
        <section className="catalog">
          <h2>Популярные автоматы</h2>
          <div className="grid">
            {featured.map((p) => (
              <article key={p.id} className="card">
                {p.badge && <span className="badge">{p.badge}</span>}
                <Link to={`/product/${p.id}`}>
                  <img src={p.image} alt={p.name} loading="lazy" />
                </Link>
                <h3><Link className="card-link" to={`/product/${p.id}`}>{p.name}</Link></h3>
                <p className="card-desc">{p.description}</p>
                <div className="card-footer">
                  <span className="price">{formatPrice(p.price)}</span>
                  <Link className="add" to={`/product/${p.id}`}>Подробнее</Link>
                </div>
              </article>
            ))}
          </div>
          <div className="center">
            <Link className="add outline wide-center" to="/catalog">Весь каталог →</Link>
          </div>
        </section>

        <section className="features">
          <h2>Почему мы</h2>
          <div className="features-grid">
            <div className="feature">
              <span className="feature-icon">🛠️</span>
              <h3>Под заказ</h3>
              <p>Изготовим автомат под ваш город и брендинг</p>
            </div>
            <div className="feature">
              <span className="feature-icon">🚚</span>
              <h3>Доставка</h3>
              <p>Доставим и установим в любую точку России</p>
            </div>
            <div className="feature">
              <span className="feature-icon">🤝</span>
              <h3>Коллаборации</h3>
              <p>Работаем с местными магазинами и художниками</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
