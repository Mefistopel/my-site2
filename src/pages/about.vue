<template>
  <q-page class="flex justify-center">
    <q-card
      class="q-ma-md"
      style="width: 1100px; background: radial-gradient(circle, #673AB7 0%, #6A1B9A 100%)"
      >
      <q-card-actions class="justify-center">
        <q-btn
          :color="title == 'Фото' ? 'primary' : 'white'"
          icon="ion-contact"
          @click="category"
          flat
        >
          <q-tooltip
            transition-show="scale"
            transition-hide="scale"
          >
            Фото
          </q-tooltip>
        </q-btn>
        <q-btn
          :color="title == 'Образование' ? 'primary' : 'white'"
          icon="ion-school"
          @click="education"
          flat>
          <q-tooltip
            transition-show="scale"
            transition-hide="scale"
          >
            Образование
          </q-tooltip>
        </q-btn>
        <!-- <q-btn
          :color="title == 'Карьера' ? 'primary' : 'white'"
          icon="ion-trending-up"
         @click="work"
         flat>
          <q-tooltip
            transition-show="scale"
            transition-hide="scale"
          >
            Карьера
          </q-tooltip>
        </q-btn> -->
        <q-btn
          :color="title == 'Навыки' ? 'primary' : 'white'"
          icon="ion-ribbon"
          @click="skills"
         flat>
          <q-tooltip
            transition-show="scale"
            transition-hide="scale"
          >
            Навыки, знания
          </q-tooltip>
        </q-btn>
      </q-card-actions>

      <q-separator dark />
      <br>
        <q-img
          v-if="title == 'Фото'"
          :src="'https://sun9-13.userapi.com/c855124/v855124282/9f7f8/R1Ag4OEc8aM.jpg'"
        />

        <app-education v-else-if="title == 'Образование'"/>
        <app-work v-else-if="title == 'Карьера'"/>
        <app-skills v-else-if="title == 'Навыки'"/>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
import Education from '../components/education'
import Work from '../components/work'
import Skills from '../components/skills'
export default {
  name: 'about',
  components: {
    appEducation: Education,
    appWork: Work,
    appSkills: Skills
  },
  data () {
    return {
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
      this.title = 'Навыки'
    },
    recommend () {
      this.title = 'Рекомендую'
    },
    hobby () {
      this.notify()
    },
    notify () {
      this.$q.notify({
        message: `Упс! Данный функционал пока отсутсвует.`,
        timeout: 1000, // in milliseconds; 0 means no timeout
        color: 'warning',
        textColor: 'black',
        icon: 'build',
        position: 'center'
      })
    }
  }
}
</script>
