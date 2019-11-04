<template>
  <div class="q-pa-md">
    <q-table
      :data="data"
      :columns="columns"
      row-key="name"
      selection="multiple"
      :selected.sync="selected"
      :filter="filter"
      grid
      hide-header
      virtual-scroll
      :pagination.sync="pagination"
      :virtual-scroll-sticky-start="48"
      :rows-per-page-options="[0]"
      :table-style="{'height': '500px'}"
      dense
    >

      <template v-slot:item="props">
        <div
          class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
        >
          <q-card class="bg-deep-purple-5 text-white">

            <q-separator />
            <q-list dense>
              <q-item v-for="col in props.cols.filter(col => col.name !== 'desc')" :key="col.name">
                <q-item-section>
                  <q-item-label>{{ col.value }}</q-item-label>
                </q-item-section>

              </q-item>
            </q-list>
            <q-separator />
            <q-card-section align="center">
              <q-btn
                      icon="ion-document"
                      @click="goToPage(props.row.link)"
                      flat
                    >
                        <q-tooltip
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        Просмотреть документ
                      </q-tooltip>
                    </q-btn>
            </q-card-section>
          </q-card>
        </div>
      </template>

    </q-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      filter: '',
      pagination: {
        rowsPerPage: 0
      },
      selected: [],
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Организация',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'organization', align: 'center', label: 'Организация', field: 'organization', sortable: true },
        { name: 'type', label: 'Вид', field: 'type', sortable: true },
        { name: 'year', label: 'Год', field: 'year' }
      ],
      data: [
        {
          name: 'Territory',
          organization: `Территория смыслов 2019`,
          type: `Пиьсмо ректору ТПУ`,
          year: 2019,
          link: `https://drive.google.com/open?id=16nMxcxUV6ie-mnAeJs1aXOEgzee1fvjM`
        },
        {
          name: 'SchoolMoscow',
          organization: `Зимняя школа Президентской академии 2019`,
          type: `Пиьсмо ректору ТПУ`,
          year: 2019,
          link: `https://drive.google.com/open?id=1CLi2xwKxVINULVvd1N-2szNbPbH4YzRM`
        }
      ]
    }
  },
  methods: {
    goToPage: function (link) {
      window.open(link, `portfolioYanusov`)
    }
  }
}
</script>

<style lang="sass">
.grid-style-transition
  transition: transform .28s, background-color .28s
</style>
