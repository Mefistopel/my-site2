import Compare from './functions'

var films = [
  {
    name: 'Интерстеллар',
    genre: 'Фантастика'
  },
  {
    name: 'Побег из Шоушенка',
    genre: 'Драма'
  },
  {
    name: 'Дневник памяти',
    genre: 'Драма'
  },
  {
    name: 'Город героев',
    genre: 'Мультфильм'
  },
  {
    name: 'Шрек',
    genre: 'Мультфильм'
  },
  {
    name: 'Апгрейд',
    genre: 'Фантастика'
  },
  {
    name: 'Пустота',
    genre: 'Ужасы'
  }
]

export default {
  films: films.sort(Compare.compare)
}
