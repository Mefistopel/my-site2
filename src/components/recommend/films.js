import Compare from './functions'
import Data from './data'

export default {
  films: Data.books.sort(Compare.compare)
}
