import { useState } from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../data'
import { useCart } from '../cart-context'

export default function CartPage() {
  const { cart, changeQty, removeItem, clearCart } = useCart()
  const [form, setForm] = useState({ name: '', phone: '', city: '', comment: '' })
  const [orderId, setOrderId] = useState(null)

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  const submitOrder = (e) => {
    e.preventDefault()
    const id = 'G-' + Math.floor(100000 + Math.random() * 900000)
    setOrderId(id)
    clearCart()
  }

  if (orderId) {
    return (
      <main className="container page-top">
        <div className="order-success big">
          <h1>Заказ оформлен! 🎉</h1>
          <p>Номер заказа: <strong>{orderId}</strong></p>
          <p>Мы свяжемся с вами для подтверждения и обсуждения доставки.</p>
          <div className="product-actions">
            <Link className="add" to="/catalog">Продолжить покупки</Link>
            <Link className="add outline" to="/">На главную</Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="container page-top">
      <h1>Корзина</h1>
      {cart.length === 0 ? (
        <div className="cart-empty-page">
          <p>Корзина пуста.</p>
          <Link className="add" to="/catalog">Перейти в каталог</Link>
        </div>
      ) : (
        <div className="cart-layout">
          <ul className="cart-items big">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <Link className="cart-item-name" to={`/product/${item.id}`}>
                    {item.name}
                  </Link>
                  <span className="price">{formatPrice(item.price)}</span>
                </div>
                <div className="qty">
                  <button onClick={() => changeQty(item.id, -1)}>−</button>
                  <span>{item.qty}</span>
                  <button onClick={() => changeQty(item.id, 1)}>+</button>
                </div>
                <span className="price">{formatPrice(item.price * item.qty)}</span>
                <button className="remove" onClick={() => removeItem(item.id)}>✕</button>
              </li>
            ))}
          </ul>

          <form className="checkout-form panel" onSubmit={submitOrder}>
            <h3>Оформление заказа</h3>
            <label>
              Имя*
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </label>
            <label>
              Телефон*
              <input required type="tel" placeholder="+7..." value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </label>
            <label>
              Город*
              <input required value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
            </label>
            <label>
              Комментарий
              <textarea rows={3} value={form.comment} onChange={(e) => setForm({ ...form, comment: e.target.value })} />
            </label>
            <div className="cart-total">
              Итого: <strong>{formatPrice(total)}</strong>
            </div>
            <button type="submit" className="add wide">Подтвердить заказ</button>
          </form>
        </div>
      )}
    </main>
  )
}
