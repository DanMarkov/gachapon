import { useState } from 'react'
import { formatPrice } from './data'

export default function Cart({ cart, setCart, open, setOpen, checkout, setCheckout }) {
  const [form, setForm] = useState({ name: '', phone: '', city: '', comment: '' })
  const [orderId, setOrderId] = useState(null)

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  const changeQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty + delta } : item
        )
        .filter((item) => item.qty > 0)
    )
  }

  const removeItem = (id) => setCart((prev) => prev.filter((i) => i.id !== id))

  const submitOrder = (e) => {
    e.preventDefault()
    const id = 'G-' + Math.floor(100000 + Math.random() * 900000)
    setOrderId(id)
    setCart([])
  }

  if (!open) return null

  return (
    <div className="cart-overlay" onClick={() => setOpen(false)}>
      <div className="cart-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Корзина</h2>
          <button className="close" onClick={() => setOpen(false)}>✕</button>
        </div>

        {orderId ? (
          <div className="order-success">
            <h3>Заказ оформлен! 🎉</h3>
            <p>Номер заказа: <strong>{orderId}</strong></p>
            <p>Мы свяжемся с вами для подтверждения и обсуждения доставки.</p>
            <button className="add" onClick={() => { setOrderId(null); setCheckout(false); setOpen(false) }}>
              Продолжить покупки
            </button>
          </div>
        ) : checkout ? (
          <form className="checkout-form" onSubmit={submitOrder}>
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
            <div className="checkout-actions">
              <button type="button" className="add outline" onClick={() => setCheckout(false)}>Назад</button>
              <button type="submit" className="add">Подтвердить заказ</button>
            </div>
          </form>
        ) : cart.length === 0 ? (
          <p className="cart-empty">Корзина пуста. Добавьте автомат из каталога!</p>
        ) : (
          <>
            <ul className="cart-items">
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-info">
                    <span className="cart-item-name">{item.name}</span>
                    <span className="price">{formatPrice(item.price)}</span>
                  </div>
                  <div className="qty">
                    <button onClick={() => changeQty(item.id, -1)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => changeQty(item.id, 1)}>+</button>
                  </div>
                  <button className="remove" onClick={() => removeItem(item.id)}>✕</button>
                </li>
              ))}
            </ul>
            <div className="cart-total">
              Итого: <strong>{formatPrice(total)}</strong>
            </div>
            <button className="add wide" onClick={() => setCheckout(true)}>
              Оформить заказ
            </button>
          </>
        )}
      </div>
    </div>
  )
}
