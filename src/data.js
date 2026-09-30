export const products = [
  {
    id: 1,
    name: 'Гачапон-автомат «Иркутск»',
    category: 'irkutsk',
    price: 40000,
    image: '/gachapon_irkutsk.jpg',
    description: 'Автомат с капсулами иркутской тематики: сувениры, магниты Байкала, брелоки нерпы.',
    badge: 'Локальный',
  },
  {
    id: 2,
    name: 'Автомат «Лягушки» — коллаборация с «Твоя полка»',
    category: 'polka',
    price: 38000,
    image: '/frogs.jpg',
    description: 'Разноцветные игрушки-лягушки в капсулах. Эксклюзивная коллаборация с иркутским магазином «Твоя полка».',
    badge: 'Коллаборация',
  },
  {
    id: 3,
    name: 'Автомат «Сувениры и украшения» — «Твоя полка»',
    category: 'polka',
    price: 42000,
    image: '/gachapon_polka.jpg',
    description: 'Сувениры и украшения в капсулах из коллаборации с магазином «Твоя полка».',
    badge: 'Коллаборация',
  },
  {
    id: 4,
    name: 'Аниме-автомат «One Piece»',
    category: 'anime',
    price: 45000,
    image: '/one_piece.png',
    description: 'Автомат с капсулами по мотивам «One Piece»: фигурки, брелоки, стикеры любимых персонажей.',
    badge: 'Аниме',
  },
  {
    id: 5,
    name: 'Аниме-автомат «JoJo»',
    category: 'anime',
    price: 45000,
    image: '/jojo.jpg',
    description: 'Капсулы с мерчем «JoJo\'s Bizarre Adventure»: фигурки стендов, брелоки, значки.',
    badge: 'Аниме',
  },
  {
    id: 6,
    name: 'Аниме-автомат «Pokemon»',
    category: 'anime',
    price: 46000,
    image: '/Pokemon.jpg',
    description: 'Автомат с покемонами: фигурки, брелоки и стикеры популярных покемонов.',
    badge: 'Хит',
  },
  {
    id: 7,
    name: 'Аниме-автомат «Akira»',
    category: 'anime',
    price: 44000,
    image: '/akira.jpg',
    description: 'Ретро-классика: капсулы с мерчем легендарной «Акиры» Кatsuhiro Otomo.',
    badge: 'Аниме',
  },
  {
    id: 8,
    name: 'Аниме-автомат «Gachiakuta»',
    category: 'anime',
    price: 45000,
    image: '/gachiakuta.jpg',
    description: 'Новинки манги «Gachiakuta»: фигурки и мерч главных героев.',
    badge: 'Аниме',
  },
]

export const categories = [
  { id: 'all', name: 'Все' },
  { id: 'anime', name: 'Аниме-серии' },
  { id: 'irkutsk', name: 'Иркутск' },
  { id: 'polka', name: 'Коллаборации «Твоя полка»' },
]

export const formatPrice = (value) =>
  new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(value)
