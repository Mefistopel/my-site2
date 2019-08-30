import Compare from './functions'

var serials = [
  {
    name: 'Экспансия',
    genre: 'Фантастика'
  },
  {
    name: 'Доктор Кто',
    genre: 'Фантастика'
  },
  {
    name: 'Готэм',
    genre: 'Фантастика'
  },
  {
    name: 'Пацаны',
    genre: 'Мультфильм'
  },
  {
    name: 'Охотник за разумом',
    genre: 'Криминал'
  },
  {
    name: 'Острые козырьки',
    genre: 'Криминал'
  }
]

export default {
  serials: serials.sort(Compare.compare)
}
