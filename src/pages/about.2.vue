<template>
  <q-page class="flex justify-center">
    <q-card
      dark
      class="q-ma-md items-right"
      text-color="grey-3"
      inline
      style="width: 900px"
      :style="{'background-color': '#6A1B9A'}" >
      <q-card-title>
        {{ title }}
        <span slot="subtitle">Янусов Андрей Сергеевич</span>
        <div
          slot="right"
          class="row items-center">
          <q-icon
            slot="right"
            name="more_vert">
            <q-popover>
              <q-list
                dark
                :style="{'background-color': '#6A1B9A'}"
                link
                class="no-border">
                <q-item
                  v-for="type in types"
                  :key="type.title"
                  @click.native="type.handler()"
                  v-close-overlay>
                  <q-item-main :label="type.label" />
                </q-item>
              </q-list>
            </q-popover>
          </q-icon>Кликни сюда
        </div>
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <q-card-media v-if="title == 'Фото'">
          <img src="../assets/vk_avatar.jpg">
        </q-card-media>
        <app-education v-else-if="title == 'Образование'"/>
        <app-work v-else-if="title == 'Карьера'"/>
        <track-record v-else-if="title == 'Достижения'"/>
      </q-card-main>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
import Education from '../components/education'
import Work from '../components/work'
import trackRecord from '../components/trackRecord'

export default {
  name: 'PageIndex',
  components: {
    appEducation: Education,
    appWork: Work,
    trackRecord: trackRecord
  },
  data () {
    return {
      types: [
        {
          label: 'Фото',
          handler: () => {
            this.category()
          }
        },
        {
          label: 'Образование',
          handler: () => {
            this.education()
          }
        },
        {
          label: 'Карьера',
          handler: () => {
            this.work()
          }
        },
        {
          label: 'Достижения',
          handler: () => {
            this.trackRecord()
          }
        },
        {
          label: 'Навыки, знания',
          handler: () => {
            this.skills()
          }
        },
        {
          label: 'Личные качества',
          handler: () => {
            this.personalQuality()
          }
        },
        {
          label: 'Интересы, хобби',
          handler: () => {
            this.hobby()
          }
        }
      ],
      title: 'Фото'
    }
  },
  methods: {
    category () {
      this.title = 'Фото'
    },
    education () {
      this.title = 'Образование'
    },
    work () {
      this.title = 'Карьера'
    },
    trackRecord () {
      this.title = 'Достижения'
    },
    skills () {
      this.notify()
    },
    personalQuality () {
      this.notify()
    },
    hobby () {
      this.notify()
    },
    notify () {
      this.$q.notify({
        message: `Упс! Данный функционал пока отсутсвует.`,
        timeout: 1000, // in milliseconds; 0 means no timeout
        type: 'warning',
        textColor: 'black',
        icon: 'build',
        detail: 'Разрабатывается...',
        position: 'center'
      })
    }
  }
}
</script>
