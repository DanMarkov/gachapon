export const products = [
  {
    id: 1,
    name: 'Гачапон-автомат «Аниме»',
    category: 'anime',
    price: 45000,
    image: 'https://picsum.photos/seed/anime1/600/600',
    description: 'Автомат с капсулами аниме-мерча: фигурки, брелоки, стикеры. В комплекте 100 капсул с товаром.',
    badge: 'Хит',
  },
  {
    id: 2,
    name: 'Гачапон-автомат «Иркутск»',
    category: 'irkutsk',
    price: 40000,
    image: 'https://picsum.photos/seed/irkut1/600/600',
    description: 'Автомат с иркутскими сувенирами: магниты Байкала, брелоки нерпы, открытки.',
    badge: 'Локальный',
  },
  {
    id: 3,
    name: 'Гачапон-автомат «Каваий»',
    category: 'anime',
    price: 48000,
    image: 'https://picsum.photos/seed/anime2/600/600',
    description: 'Пастельный автомат с милым мерчем: плюши, канцелярия, наклейки. 120 капсул.',
    badge: '',
  },
  {
    id: 4,
    name: 'Гачапон-автомат «Байкал»',
    category: 'irkutsk',
    price: 42000,
    image: 'https://picsum.photos/seed/irkut2/600/600',
    description: 'Автомат в байкальской тематике: капсулы с сувенирами, минералами и открытками озера.',
    badge: '',
  },
  {
    id: 5,
    name: 'Гачапон-автомат под заказ',
    category: 'custom',
    price: 55000,
    image: 'https://picsum.photos/seed/custom1/600/600',
    description: 'Автомат под заказ для вашего города: брендирование, выбор тематики капсул, логотип.',
    badge: 'Под заказ',
  },
  {
    id: 6,
    name: 'Мини-автомат «Столичный»',
    category: 'custom',
    price: 32000,
    image: 'https://picsum.photos/seed/custom2/600/600',
    description: 'Настольный мини-гачапон для кафе и магазинов. Компактный, 50 капсул.',
    badge: '',
  },
]

export const categories = [
  { id: 'all', name: 'Все' },
  { id: 'anime', name: 'Аниме-мерч' },
  { id: 'irkutsk', name: 'Иркутские сувениры' },
  { id: 'custom', name: 'Под заказ' },
]

export const formatPrice = (value) =>
  new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(value)
