import Compare from './functions'
import Data from './data'

export default {
  books: Data.books.sort(Compare.compare)
}
