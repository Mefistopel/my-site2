import Compare from './functions'
import Data from './data'

export default {
  films: Data.films.sort(Compare.compare)
}
