import Compare from './functions'
import Data from './data'

export default {
  serials: Data.serials.sort(Compare.compare)
}
