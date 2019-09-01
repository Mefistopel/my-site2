<template>
  <q-card-section >
    <q-select
        color="purple"
        bg-color="deep-purple-5"
        label="Выберите раздел"
        transition-show="scale"
        transition-hide="scale"
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
          color="white"
          card-class="bg-deep-purple-5 text-white"
          table-class="text-white"
          flat
          bordered
        >
        <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="genre" :props="props">
            {{ props.row.genre }}
          </q-td>
          <q-td auto-width>
            <q-btn
              icon="ion-copy"
              @click="copyClick(props.row.name)"
              flat
            />
          </q-td>
        </q-tr>
      </template>
        </q-table>
      </div>
    </div>
  </q-card-section>
</template>

<script>
import Films from './recommend/films'
import Serials from './recommend/serials'
import Books from './recommend/books'
import Links from './recommend/links'

export default {
  name: 'Recommend',
  data () {
    return {
      selected: '',
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
          sortable: true
        },
        { name: 'genre', align: 'left', label: 'Категория', field: 'genre', sortable: true, style: 'max-width: 30px' }
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
    copyClick: function (text) {
      var copytext = document.createElement('input')
      if (typeof text === 'undefined') copytext.value = window.location.href
      else copytext.value = text
      document.body.appendChild(copytext)
      copytext.select()
      document.execCommand('copy')
      document.body.removeChild(copytext)
      this.$q.notify({
        message: `Название успешно скопировано в буфер обмена!`,
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
