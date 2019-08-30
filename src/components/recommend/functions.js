export default {
  compare: function (a, b) {
    // Используем toUpperCase() для преобразования регистра
    const genreA = a.name.toUpperCase()
    const genreB = b.name.toUpperCase()

    let comparison = 0
    if (genreA > genreB) {
      comparison = 1
    } else if (genreA < genreB) {
      comparison = -1
    }
    return comparison
  }
}
