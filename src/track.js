const YM_GOALS = {
  product_view: 'product_view',
  add_to_cart: 'add_to_cart',
  place_order: 'place_order',
}

export const track = (name, data) => {
  if (typeof window !== 'undefined' && window.umami) {
    window.umami.track(name, data)
  }

  if (typeof window !== 'undefined' && window.ym && YM_GOALS[name]) {
    window.ym(113435642, 'reachGoal', YM_GOALS[name], data)
  }
}

