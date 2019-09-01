import Compare from './functions'
import Data from './data'

export default {
  links: Data.links.sort(Compare.compareGenre)
}
