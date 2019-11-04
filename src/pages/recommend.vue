<template>
  <q-page  class="flex justify-center">
    <q-card
       class="q-ma-md"
      style="width: 1100px; background: radial-gradient(circle, #673AB7 0%, #6A1B9A 100%)"
    >
        <q-card-section >
          <q-select
              color="purple"
              bg-color="deep-purple-5"
              label="Выберите раздел"
              filled
              dark
              popup-content-class="bg-deep-purple-4 text-white"
              v-model="selected"
              :options="options"
            />

          <q-separator spaced />

          <div>
            <div class="text-h4">{{selected}}</div>

            <q-separator spaced />
            <div class="text-justify">

              <q-table
                :data="data"
                :columns="columns"
                row-key="name"
                style="max-width: 1100px "
                dark
                wrap-cells
                card-class="bg-deep-purple-5 text-white"
                class="sticky-table shadow-0"
                virtual-scroll
                :pagination.sync="pagination"
                :virtual-scroll-sticky-start="48"
                :rows-per-page-options="[0]"
                :table-style="{'height': '480px'}"
                dense
              >
              <template v-slot:body="props">
                <q-tr :props="props">
                  <q-td key="name" :props="props" style="width: 50px">
                    {{ ((props.row.name).length > 45) ? props.row.name.substr(0, 45) + '..' :  props.row.name}}
                  </q-td>
                  <q-td key="genre" :props="props">
                    {{ props.row.genre }}
                  </q-td>
                  <q-td key="note" :props="props">
                    {{ props.row.note }}
                  </q-td>
                  <q-td auto-width>
                    <q-btn
                      icon="ion-search"
                      @click="copyClick(props.row.name, selected)"
                      flat
                    >
                        <q-tooltip
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        Найти в поисковике Яндекса
                      </q-tooltip>
                    </q-btn>
                  </q-td>
                </q-tr>
            </template>

          </q-table>
            </div>
          </div>
        </q-card-section>

    </q-card>
  </q-page>
</template>

<script>
import Films from './../components/recommend/films'
import Serials from './../components/recommend/serials'
import Books from './../components/recommend/books'
import Links from './../components/recommend/links'

export default {
  name: 'Recommend',
  data () {
    return {
      selected: '',
      pagination: {
        rowsPerPage: 0
      },
      options: [
        'Фильмы', 'Сериалы', 'Книги', 'Полезные ссылки'
      ],
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Название',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true,
          style: `width: 330px`
        },
        { name: 'genre', align: 'left', label: 'Категория', field: 'genre', sortable: true, style: 'max-width: 30px' },
        { name: 'note', align: 'left', label: 'Примечание', field: 'note', sortable: false, style: 'max-width: 30px' },
        { name: 'copy', align: 'center', label: '', field: 'copy', sortable: false, style: 'max-width: 540px' }
      ],
      data: []
    }
  },
  watch: {
    selected: function () {
      switch (this.selected) {
        case 'Фильмы':
          this.data = Films.films
          break
        case 'Сериалы':
          this.data = Serials.serials
          break
        case 'Книги':
          this.data = Books.books
          break
        case 'Полезные ссылки':
          this.data = Links.links
          // this.$q.notify({
          //   message: `Упс! Данный функционал пока отсутсвует.`,
          //   timeout: 300, // in milliseconds; 0 means no timeout
          //   color: 'warning',
          //   textColor: 'black',
          //   icon: 'build',
          //   position: 'center'
          // })
          break
      }
    }
  },
  methods: {
    copyClick: function (text, selected) {
      // var copytext = document.createElement('input')
      // if (typeof text === 'undefined') copytext.value = window.location.href
      // else copytext.value = text
      // document.body.appendChild(copytext)
      // copytext.select()
      // document.execCommand('copy')
      // document.body.removeChild(copytext)
      let searchYandex = null
      switch (selected) {
        case `Полезные ссылки`:
          searchYandex = `${text}`
          break
        case `Фильмы`:
          searchYandex = `${text} фильм`
          break
        case `Книги`:
          searchYandex = `${text} книга`
          break
        case `Сериалы`:
          searchYandex = `${text} сериал`
          break
      }

      setTimeout(function () {
        window.open(`https://yandex.ru/search/?text=${searchYandex}`, `yandexSearch`)
      }, 2000)
      this.$q.notify({
        message: `Вы будете перенаправлены на Яндекс`,
        timeout: 300, // in milliseconds; 0 means no timeout
        color: 'info',
        textColor: 'black',
        icon: 'ion-copy',
        position: 'center'
      })
    }
  }
}
</script>

<style>

 thead tr:first-child th {
    background-color: #7e57c2;
    font-weight: bold;
}

.sticky-table thead tr:first-child th {
    position: sticky;
    top: 0;
    opacity: 1;
    z-index: 1;
}

</style>
