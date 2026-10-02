import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { products, formatPrice } from '../data'
import { useCart } from '../cart-context'
import { track } from '../track'

export default function Product() {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number(id))
  const { addToCart } = useCart()

  if (!product) return <Navigate to="/catalog" replace />

  useEffect(() => {
    track('Просмотр товара', { name: product.name, price: product.price })
  }, [product?.id])

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <main className="container page-top">
      <div className="breadcrumbs">
        <Link to="/">Главная</Link> / <Link to="/catalog">Каталог</Link> /{' '}
        <span>{product.name}</span>
      </div>

      <div className="product">
        <div className="product-image">
          {product.badge && <span className="badge">{product.badge}</span>}
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price product-price">{formatPrice(product.price)}</p>
          <p className="product-desc">{product.description}</p>
          <p className="product-note">
            Уточнить наличие и условия установки можно при оформлении заказа
            или в Telegram.
          </p>
          <div className="product-actions">
            <button
              className="add"
              onClick={() => {
                addToCart(product)
                track('Добавил в корзину', { name: product.name, price: product.price })
              }}
            >
              В корзину
            </button>
            <Link className="add outline" to="/cart">Перейти в корзину</Link>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="catalog">
          <h2>Похожие автоматы</h2>
          <div className="grid">
            {related.map((p) => (
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
        </section>
      )}
    </main>
  )
}
